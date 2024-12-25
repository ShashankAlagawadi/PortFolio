// "use client";

// import { Card } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Award, Trophy, Star, Medal } from "lucide-react";
// import { AchievementCard } from "@/components/achievement-card";
// // import { achievements } from "@/data/achievements";

// export const achievements = [
//   {
//     title: "Certified for Research Work",
//     description: "CIS International Conference, Bangalore, for research on predictive maintenance.",
//     date: "2024",
//     icon: "award"
//   },
//   {
//     title: "IEEE Certified for Research Work",
//     description: "IEEE Conference on Engineering Informatics 2024, IITDharwad, for research on Statistical Modeling.",
//     date: "2024",
//     icon: "award"
//   },
//   {
//     title: "GDG Dev Fest:Pune",
//     description: "Attented the Google Developer Conference organised by GDG Pune.",
//     date: "2024",
//     icon: "medal"
//   },
//   {
//     title: "GDG Dev Fest:Hubli",
//     description: "Attented the Google Developer Conference organised by GDG Hubli.",
//     date: "2024",
//     icon: "medal"
//   }
// ];

// export default function Achievements() {
//   // const { title, description, date, icon } = achievements;

//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-16 bg-mesh">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
//           Achievements
//         </h1>
//         <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Milestones and recognition throughout my professional journey.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {achievements.map((achievement) => (
//             <AchievementCard key={achievement.title} achievement={achievement} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, Medal } from "lucide-react";
import { AchievementCard } from "@/components/achievement-card";

type IconType = "award" | "medal" | "trophy" | "star";

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: IconType;
}

export const achievements: Achievement[] = [
  {
    title: "Certified for Research Work",
    description: "CIS International Conference, Bangalore, for research on predictive maintenance.",
    date: "2024",
    icon: "award",
  },
  {
    title: "IEEE Certified for Research Work",
    description: "IEEE Conference on Engineering Informatics 2024, IITDharwad, for research on Statistical Modeling.",
    date: "2024",
    icon: "award",
  },
  {
    title: "GDG Dev Fest:Pune",
    description: "Attented the Google Developer Conference organised by GDG Pune.",
    date: "2024",
    icon: "medal",
  },
  {
    title: "GDG Dev Fest:Hubli",
    description: "Attented the Google Developer Conference organised by GDG Hubli.",
    date: "2024",
    icon: "medal",
  },
];

export default function Achievements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 py-16 bg-mesh">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
          Achievements
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Milestones and recognition throughout my professional journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </div>
    </main>
  );
}
