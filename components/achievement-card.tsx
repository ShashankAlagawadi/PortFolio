"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal } from "lucide-react";

interface AchievementCardProps {
  achievement: {
    title: string;
    description: string;
    date: string;
    icon: "award" | "trophy" | "star" | "medal";
  };
}

const icons = {
  award: Award,
  trophy: Trophy,
  star: Star,
  medal: Medal,
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  const Icon = icons[achievement.icon];

  return (
    <Card className="p-6 card-hover">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-highlight/10 text-highlight">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
          <p className="text-muted-foreground mb-3">{achievement.description}</p>
          <Badge variant="secondary">{achievement.date}</Badge>
        </div>
      </div>
    </Card>
  );
}