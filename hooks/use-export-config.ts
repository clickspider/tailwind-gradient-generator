'use client';

import { useState } from 'react';

export interface ExportConfig {
  width: number;
  height: number;
  transparent: boolean;
  resolution: number;
}

const defaultConfig: ExportConfig = {
  width: 1920,
  height: 1080,
  transparent: false,
  resolution: 1,
};

export function useExportConfig() {
  const [config, setConfig] = useState<ExportConfig>(defaultConfig);

  const updateConfig = (updates: Partial<ExportConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  return {
    config,
    updateConfig,
  };
}