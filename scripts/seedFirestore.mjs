import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./firebase-applet-config.json', 'utf-8'));
const app = initializeApp(config);
const db = getFirestore(app, config.firestoreDatabaseId);

// Read src/portfolioData.ts
const code = fs.readFileSync('./src/portfolioData.ts', 'utf-8');

// Replace the image import with a dummy string so it can be evaluated
const cleanedCode = code
  .replace(/import rizwanProfileImg from [^;]+;/, 'const rizwanProfileImg = "https://example.com/rizwan.jpg";')
  .replace(/export interface [^}]+}/g, '')
  .replace(/export const PORTFOLIO_DATA =/, 'export default')
  .replace(/as Service\[\]/g, '')
  .replace(/as Project\[\]/g, '');

fs.writeFileSync('./scripts/tempPortfolioData.mjs', cleanedCode);

const module = await import('./tempPortfolioData.mjs');
const portfolioData = module.default;

console.log(`Found ${portfolioData.projects.length} projects to persist into Firestore.`);

let count = 0;
for (let i = 0; i < portfolioData.projects.length; i++) {
  const p = portfolioData.projects[i];
  const ref = doc(db, 'projects', p.id);
  // Stagger createdAt so ordering stays intact
  const dateStr = new Date(Date.now() - i * 60000).toISOString();
  await setDoc(ref, {
    ...p,
    adminPin: '5911',
    createdAt: dateStr,
    updatedAt: dateStr
  }, { merge: true });
  count++;
  console.log(`[${count}/${portfolioData.projects.length}] Persisted ${p.id} (${p.name})`);
}

// Clean up temp file
try {
  fs.unlinkSync('./scripts/tempPortfolioData.mjs');
} catch (_) {}

// Verify in DB
const snap = await getDocs(collection(db, 'projects'));
console.log(`\nVerification: Firestore now contains ${snap.size} persisted projects in production database!`);
process.exit(0);
