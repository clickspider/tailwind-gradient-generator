"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="container mx-auto py-8 mt-8">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-sm text-muted-foreground">
          Created with ❤️ by{" "}
          <a
            href="https://github.com/clickspider"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Daniel Frey
          </a>
        </p>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/clickspider"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/daniel-frey-574577172/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
