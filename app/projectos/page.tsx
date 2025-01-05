import { ProjectHero } from '@/components/projects/project-hero';
import { ProjectGrid } from '@/components/projects/project-grid';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ProjectHero />
      <ProjectGrid />
    </div>
  );
}