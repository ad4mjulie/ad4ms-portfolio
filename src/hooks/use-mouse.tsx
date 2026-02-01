import { useCallback, useEffect, useRef, useState } from "react";

type useMouseType = {
  allowPage?: boolean;
  allowAngle?: boolean;
  allowAcc?: boolean;
};

export const useMouse = ({
  allowPage,
  allowAngle,
  allowAcc,
}: useMouseType = {}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const rafId = useRef<number>();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        setX(allowPage ? e.pageX : e.clientX);
        setY(allowPage ? e.pageY : e.clientY);

        if (allowAcc) {
          const acc = Math.abs(e.movementX) + Math.abs(e.movementY);
          setAcceleration(acc);
        }
        if (allowAngle) {
          setAngle(Math.atan2(e.movementY, e.movementX));
        }
      });
    },
    [allowPage, allowAcc, allowAngle]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return { x, y, angle, acceleration };
};
