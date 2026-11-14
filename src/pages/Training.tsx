import React from 'react';
import {
  TrainingHero,
  TrainingTracks,
  TrainingMethodology,
  TrainingQuote,
  TrainingDiagnosticForm,
} from '@/components/training';

/**
 * Training Page Component:
 * Composed using dedicated modular components from `@/components/training`.
 * Corporate engineering curricula, 4-pillar upskilling framework, and diagnostic dispatch.
 */
export const TrainingPage: React.FC = () => {
  return (
    <div className="pt-20 sm:pt-24 bg-white">
      {/* 1. Page Hero */}
      <TrainingHero />

      {/* 2. Core Corporate Engineering Tracks */}
      <TrainingTracks />

      {/* 3. 4-Pillar Upskilling Methodology */}
      <TrainingMethodology />

      {/* 4. Principle Quote & Accreditation */}
      <TrainingQuote />

      {/* 5. Schedule a Technical Training Diagnostic Form */}
      <TrainingDiagnosticForm />
    </div>
  );
};

export default TrainingPage;
