'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion'; // тяжелый импорт
import { ChevronLeft, X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onBack?: () => void;
  withCross?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onBack,
  withCross = true,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabKey = useCallback((e: KeyboardEvent) => {
    if (!contentRef.current) return;
    const focusableElements = contentRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleTabKey);
      const closeOnEscape = (e: KeyboardEvent) =>
        e.key === 'Escape' && onClose();
      window.addEventListener('keydown', closeOnEscape);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleTabKey);
        window.removeEventListener('keydown', closeOnEscape);
      };
    }
  }, [isOpen, onClose, handleTabKey]);

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40"
          />
          <motion.div
            ref={contentRef}
            layout
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2, layout: { duration: 0.3 } }}
            className="relative z-[1001] p-5 lg:p-10 h-full lg:h-fit w-full max-w-lg shadow-2xl overflow-hidden bg-[var(--background)] text-[var(--text-color)]"
          >
            {onBack && withCross && (
              <div className="mb-6 flex items-center justify-between">
                <button
                  onClick={onBack}
                  className="rounded-[1px] lg:block lg:hover:bg-[var(--header-hover)] lg:hover:outline-2 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)]"
                  aria-label="Назад"
                  type="button"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={onClose}
                  className="rounded-[1px] lg:block lg:hover:bg-[var(--header-hover)] lg:hover:outline-2 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)]"
                  aria-label="Закрыть"
                  type="button"
                >
                  <X size={32} />
                </button>
              </div>
            )}

            {!onBack && withCross ? (
              <div className="mb-6 flex items-center justify-between">
                <h2 id="dialog-title" className="text-[27px] font-bold">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-[1px] lg:block lg:hover:bg-[var(--header-hover)] lg:hover:outline-2 lg:hover:outline-offset-0 lg:hover:outline-[var(--header-hover)]"
                  aria-label="Закрыть"
                  type="button"
                >
                  <X size={32} />
                </button>
              </div>
            ) : (
              <h2 id="dialog-title" className="text-[27px] font-bold">
                {title}
              </h2>
            )}

            <div className="overflow-hidden relative">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.getElementById('modal-root') as HTMLElement
  );
};
