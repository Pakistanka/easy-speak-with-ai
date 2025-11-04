// @ts-nocheck
import { cn } from '@/shared/lib/utils';
import { motion } from 'framer-motion';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        transition: {
          repeat: Infinity,
          duration: 1.5,
          ease: 'easeInOut',
        },
      }}
      className={cn('rounded-md bg-muted', className)}
      {...props}
    />
  );
}

export { Skeleton };
