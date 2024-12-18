'use client';

import { motion } from 'framer-motion';
import { Wand2, Zap, Target, Trophy } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'Instant Enhancement',
    description: 'Transform your prompts instantly with AI-powered suggestions and improvements',
  },
  {
    icon: Target,
    title: 'Best Practices',
    description: 'Automatically apply industry-standard best practices to your prompts',
  },
  {
    icon: Zap,
    title: 'Improved Clarity',
    description: 'Get clearer, more precise results with optimized prompt structure',
  },
  {
    icon: Trophy,
    title: 'Professional Results',
    description: 'Achieve consistent, high-quality outputs from your AI interactions',
  },
];

export function Features() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-3xl bg-background/60 backdrop-blur-xl border border-border shadow-lg">
                <feature.icon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}