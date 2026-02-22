import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useMemo } from 'react';
import styles from './SwipeRow.module.css';

export type SwipeAction = {
  /** The visual content of the button (e.g. text or icon) */
  label: React.ReactNode;
  /** Callback triggered when this action is clicked */
  onClick: () => void;
  /** Background color for this action button */
  backgroundColor?: string;
  /** Text color for this action button */
  color?: string;
  /** Width of the button. Defaults to 80px */
  width?: number;
  /** Additional CSS class for the button */
  className?: string;
  /** Accessibility label. Defaults to label if it is a string a fallback string */
  ariaLabel?: string;
};

export type SwipeRowProps = {
  /** The content to be displayed in the row */
  children: React.ReactNode;
  /** An array of action objects to render behind the row */
  actions: SwipeAction[];
  /** Optional custom swipe threshold. Computed automatically if not provided. */
  maxSwipe?: number;
  /** Custom className for the root container */
  className?: string;
  /** Custom inline style for the root container */
  style?: React.CSSProperties;
  /** Custom className for the foreground element */
  innerClassName?: string;
  /** Custom inline style for the foreground element */
  innerStyle?: React.CSSProperties;
};

/**
 * SwipeRow creates an iOS style swipeable row element that reveals generic actions behind it.
 * Highly configurable and built for generic use across various projects.
 */
export function SwipeRow({ children, actions, maxSwipe, className, style, innerClassName, innerStyle }: SwipeRowProps) {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculatedMaxSwipe = useMemo(() => {
    return -actions.reduce((acc, action) => acc + (action.width || 80), 0);
  }, [actions]);

  const swipeDistance = maxSwipe !== undefined ? maxSwipe : calculatedMaxSwipe;

  const backgroundOpacity = useTransform(x, [swipeDistance / 2, 0], [1, 0]);

  const handleDragEnd = () => {
    const current = x.get();

    // Swipe threshold to snap open
    if (current < swipeDistance / 2) {
      animate(x, swipeDistance, { type: 'spring', bounce: 0, duration: 0.3 });
    } else {
      animate(x, 0, { type: 'spring', bounce: 0, duration: 0.3 });
    }
  };

  return (
    <div ref={containerRef} className={`${styles.container} ${className || ''}`.trim()} style={style}>
      {/* ACTIONS BACKGROUND */}
      <motion.div
        style={{ opacity: backgroundOpacity }}
        className={styles.actionsBackground}
      >
        {actions.map((action, index) => {
          const defaultAria = typeof action.label === 'string' ? action.label : `Action ${index}`;
          return (
            <button
              key={index}
              onClick={action.onClick}
              className={`${styles.actionButton} ${action.className || ''}`.trim()}
              style={{
                width: action.width || 80,
                backgroundColor: action.backgroundColor || '#64748b', // Slate
                color: action.color || 'white',
              }}
              aria-label={action.ariaLabel || defaultAria}
            >
              {action.label}
            </button>
          );
        })}
      </motion.div>

      {/* FOREGROUND */}
      <motion.div
        drag="x"
        dragConstraints={{ left: swipeDistance, right: 0 }}
        dragElastic={0.1}
        style={{ x, ...innerStyle }}
        onDragEnd={handleDragEnd}
        className={`${styles.foreground} ${innerClassName || ''}`.trim()}
      >
        {children}
      </motion.div>
    </div>
  );
}
