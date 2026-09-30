// Helper to export the CV document directly as a downloadable PDF
import html2pdf from 'html2pdf.js';

export async function downloadCVPdf(
  targetElementId: string = 'cv-document', 
  fileName: string = 'Rizwan_Ahmad_Professional_CV.pdf'
): Promise<void> {
  const element = document.getElementById(targetElementId);
  
  if (!element) {
    // If element is not in DOM, fallback to native window.print
    window.print();
    return;
  }

  // Clone element or configure html2pdf options for pristine A4 export
  const opt = {
    margin: [8, 8, 8, 8] as [number, number, number, number],
    filename: fileName,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      scrollY: 0,
      windowWidth: 1200
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' as const
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
  };

  try {
    // Generate and immediately trigger file download
    await html2pdf().set(opt).from(element).save();
  } catch (err) {
    console.warn('html2pdf download error, falling back to window.print():', err);
    try {
      window.print();
    } catch (e) {
      console.error('Print also restricted:', e);
    }
  }
}
