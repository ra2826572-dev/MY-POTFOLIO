import React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseMe } from '../components/WhyChooseMe';
import { CVPreviewSection } from '../components/CVPreviewSection';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

interface HomeProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <Hero onOpenQuoteModal={onOpenQuoteModal} />
      <WhyChooseMe />
      <CVPreviewSection onOpenQuoteModal={onOpenQuoteModal} />
      <Testimonials />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </>
  );
};
