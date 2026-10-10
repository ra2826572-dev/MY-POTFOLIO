import React from 'react';
import { Services as ServicesComponent } from '../components/Services';
import { CTA } from '../components/CTA';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20">
      <ServicesComponent onOpenQuoteModal={onOpenQuoteModal} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
