import { Award, Medal, Trophy, Star } from "lucide-react";

type AchievementCardProps = {
  achievement: {
    title: string;
    description: string;
    date: string;
    icon: "award" | "medal" | "trophy" | "star";  // Make sure the type matches here
  };
};
