"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
  ref={overlay}
  onClick={onClick}
  style={{
    position: 'fixed',
    zIndex: 10,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '2.5rem', 
  }}
>
  <div
    ref={wrapper}
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '1.5rem', 
      width: '100%', 
      maxWidth: '33.333333%', 
    }}
  >
    {children}
  </div>
</div>

  );
}