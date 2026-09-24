import React from 'react';
import { Projects as ProjectsComponent } from '../components/Projects';

interface ProjectsProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-20">
      <ProjectsComponent onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};
