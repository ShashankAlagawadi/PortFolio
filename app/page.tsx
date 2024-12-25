"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const skills = [
    "Python", "C++", "Node.js", "Next.js", "Java",
    "AWS", "Docker", "Mysql", "PowerBI", "MongoDB"
  ];

  return (
    <main className="min-h-screen bg-mesh ">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-14 pb-0">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text mt-8">
            Shashank Alagawadi
          </h1>
          
          <p className="text-xl md:text-1xl text-muted-foreground mb-8 leading-relaxed">
            Building innovative models with Machine Learning techniques
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" >
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
          Technologies & Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary" 
              className="text-lg py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-8 card-hover">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Looking for a AI-ML Engineer ?</h2>
            <p className="text-muted-foreground mb-6">
              I`m currently available for internship or full-time positions.
              Let`s build something amazing together.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </Card>
      </section>
    </main>
  );
}