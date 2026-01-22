
import React from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';

interface SplitTextProps {
  text: string;
  progress: MotionValue<number>;
  className?: string;
  invert?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({ text, progress, className, invert = false }) => {
  /**
   * We map the scroll progress to horizontal offsets.
   * progress 0: element is just entering from the bottom.
   * progress 0.5: element is exactly in the center of the viewport.
   * progress 1: element is just leaving from the top.
   * 
   * To achieve the "settle" effect, we make the shift 0 when progress is 0.5.
   * We also use a wider range for the "settled" state so it feels fixed for a moment.
   */
  const rawXTop = useTransform(
    progress, 
    [0, 0.35, 0.5, 0.65, 1], 
    invert ? [120, 40, 0, -40, -120] : [-120, -40, 0, 40, 120]
  );
  
  const rawXBottom = useTransform(
    progress, 
    [0, 0.35, 0.5, 0.65, 1], 
    invert ? [-120, -40, 0, 40, 120] : [120, 40, 0, -40, -120]
  );

  // Apply a spring for that "smooth settle" feel
  const xTop = useSpring(rawXTop, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const xBottom = useSpring(rawXBottom, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className={`relative inline-block w-full overflow-hidden select-none ${className}`}>
      {/* Top Half */}
      <motion.div 
        style={{ x: xTop }}
        className="relative z-10"
        aria-hidden="true"
      >
        <div style={{ clipPath: 'inset(0 0 50% 0)' }}>
          {text}
        </div>
      </motion.div>

      {/* Bottom Half */}
      <motion.div 
        style={{ x: xBottom }}
        className="absolute top-0 left-0 w-full"
      >
        <div style={{ clipPath: 'inset(50% 0 0 0)' }}>
          {text}
        </div>
      </motion.div>
    </div>
  );
};

export default SplitText;
