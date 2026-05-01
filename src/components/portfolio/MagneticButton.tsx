import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  as?: "a" | "button";
  target?: string;
  rel?: string;
};

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  as,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  const Tag = (as ?? (href ? "a" : "button")) as "a" | "button";

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="inline-block"
    >
      <Tag
        ref={ref as never}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={`inline-flex items-center justify-center transition-transform duration-300 ease-out will-change-transform ${className}`}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
