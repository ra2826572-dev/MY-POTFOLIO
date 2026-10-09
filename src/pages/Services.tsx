import React from 'react';
import { Services as ServicesComponent } from '../components/Services';
import { ContentWritingPortfolio } from '../components/ContentWritingPortfolio';
import { CTA } from '../components/CTA';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20">
      <ServicesComponent onOpenQuoteModal={onOpenQuoteModal} />
      <ContentWritingPortfolio onOpenQuoteModal={onOpenQuoteModal} isEmbedded={true} />
      <CTA onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
