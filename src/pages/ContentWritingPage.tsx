import React from 'react';
import { ContentWritingPortfolio } from '../components/ContentWritingPortfolio';

interface ContentWritingPageProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ContentWritingPage: React.FC<ContentWritingPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20">
      <ContentWritingPortfolio onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
