'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';

const examples = [
  {
    before: "Make an image of a cat",
    after: "Create a detailed digital illustration of a playful domestic cat with soft fur, sitting in a cozy window sill during golden hour. Focus on capturing the cat's expressive eyes and natural pose.",
  },
  {
    before: "Write about space",
    after: "Compose a comprehensive overview of recent discoveries in deep space exploration, focusing on exoplanets within habitable zones and their potential for supporting life. Include specific examples from NASA and ESA missions.",
  },
];

export function Examples() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Before & After Examples</h2>
        
        <div className="space-y-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Card className="p-6 bg-background/60 backdrop-blur-xl">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Before</h3>
                <p className="text-lg">{example.before}</p>
              </Card>
              
              <Card className="p-6 bg-background/60 backdrop-blur-xl border-primary/50">
                <h3 className="text-sm font-medium text-primary mb-2">After</h3>
                <p className="text-lg">{example.after}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}