import { useLayoutEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  label: string;
  onClose: () => void;
  children: ReactNode;
}

/** Native modality keeps the scene inert, including after zoom and inside sticky headers. */
export function Dialog({ label, onClose, children }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  useLayoutEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement;
    dialog.showModal();
    const oldOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.documentElement.style.overflow = oldOverflow;
      if (previous instanceof HTMLElement || previous instanceof SVGElement) previous.focus({ preventScroll: true });
    };
  }, []);
  return createPortal(
    <dialog
      ref={ref}
      aria-label={label}
      className="case-dialog"
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}>

      {children}

    </dialog>,
    document.body
  );
}
