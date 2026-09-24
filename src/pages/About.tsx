import React from 'react';
import { About as AboutComponent } from '../components/About';

interface AboutProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20">
      <AboutComponent onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
