'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles } from 'lucide-react';

export function PromptEditor() {
  const [prompt, setPrompt] = useState('');

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto max-w-4xl">
        <Card className="p-8 bg-background/60 backdrop-blur-xl border border-border shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Enhance Your Prompt</h2>
            <p className="text-muted-foreground">
              Paste your prompt below and let our AI help you make it more effective
            </p>
          </div>

          <div className="space-y-4">
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[200px] bg-background/60"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />

            <div className="flex justify-end">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="px-8">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Enhance
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}