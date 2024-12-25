"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary py-16  bg-mesh">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">Get in Touch</h1>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" />
              </div>
              <div>
                <Input placeholder="Subject" />
              </div>
              <div>
                <Textarea placeholder="Your Message" className="h-32" />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>

          {/* Social Links */}
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
            <div className="space-y-6">
              <Link href="https://github.com/ShashankAlagawadi" className="flex items-center gap-4 p-4  rounded-lg transition-colors">
                <Github className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Check out my code</p>
                </div>
              </Link>
              
              <Link href="https://in.linkedin.com/in/shashank-alagawadi-b2874625b" className="flex items-center gap-4 p-4  rounded-lg transition-colors">
                <Linkedin className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Let`s connect professionally</p>
                </div>
              </Link>
              
              {/* <Link href="https://twitter.com" className="flex items-center gap-4 p-4 hover:bg-secondary rounded-lg transition-colors">
                <Twitter className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-sm text-muted-foreground">Follow me for updates</p>
                </div>
              </Link> */}
              
              <Link href="mailto:shashankalagawadi6986@gmail.com" className="flex items-center gap-4 p-4 rounded-lg transition-colors">
                <Mail className="h-6 w-6" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}