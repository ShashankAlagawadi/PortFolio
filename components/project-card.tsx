"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    demoUrl?: string;
    githubUrl?: string;
    image?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="p-6 card-hover border border-violet-500/10 bg-card/50 backdrop-blur-sm">
      {project.image && (
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-3 text-secondary">{project.title}</h3>
      <p className="text-muted-foreground mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="secondary" className="badge-glow">
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex gap-4">
        {project.demoUrl && (
          <Button asChild variant="default" size="sm" className="btn-primary">
            <Link href={project.demoUrl} target="_blank">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" size="sm" className="border-violet-500/20 hover:bg-violet-500/10">
            <Link href={project.githubUrl} target="_blank">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Link>
          </Button>
        )}
      </div>
    </Card>
  );
}