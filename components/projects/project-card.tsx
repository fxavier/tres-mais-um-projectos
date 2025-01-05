'use client';

import { Project } from '@/lib/data/projects';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    residential: 'bg-blue-500',
    commercial: 'bg-green-500',
    industrial: 'bg-orange-500',
    renovation: 'bg-purple-500',
  };

  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <Badge className={categoryColors[project.category]}>
            {project.category}
          </Badge>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {project.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {project.completionDate}
          </div>
        </div>
      </div>
    </Card>
  );
}