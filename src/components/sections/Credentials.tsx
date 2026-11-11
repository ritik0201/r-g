import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { credentialsData } from '@/data/credentials';
import { Container } from '@/components/common/Container';
import { Card } from '@/components/common/Card';
import { staggerContainerVariant, fadeUpVariant } from '@/lib/motion';

interface CountUpProps {
  target: number;
  suffix: string;
}

const CountUpNumber: React.FC<CountUpProps> = ({ target, suffix }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(target);
      return;
    }

    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target, shouldReduceMotion]);

  return (
    <span
      ref={ref}
      className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight tabular-nums block"
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

/**
 * Company Experience & Credentials Section:
 * Displays verified enterprise stats with gold top-accent line and count-up animation on scroll.
 */
export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-20 lg:py-24 bg-white relative">
      <Container>
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {credentialsData.map((stat) => (
            <motion.div key={stat.id} variants={fadeUpVariant}>
              <Card
                variant="default"
                className="p-8 sm:p-10 relative overflow-hidden bg-white border border-border shadow-card hover:shadow-card-hover transition-shadow"
              >
                {/* Gold Top Accent Line */}
                <div
                  className="h-1.5 w-14 bg-accent rounded-full mb-6"
                  aria-hidden="true"
                />

                {/* Animated Stat Value */}
                <CountUpNumber target={stat.numericValue} suffix={stat.suffix} />

                {/* Stat Description */}
                <p className="mt-3 text-text-muted text-base sm:text-lg font-medium leading-snug">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
