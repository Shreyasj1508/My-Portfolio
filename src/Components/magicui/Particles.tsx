"use client";

import React from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}



function hexToRgb(hex: string): [number, number, number] {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
  const num = parseInt(c, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

function useMousePosition(): MousePosition {
  const [position, setPosition] = React.useState<MousePosition>({ x: 0, y: 0 });
  React.useEffect(() => {
    function update(e: MouseEvent) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);
  return position;
}

const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = React.useRef<HTMLDivElement>(null);
    const context = React.useRef<CanvasRenderingContext2D | null>(null);
    const circles = React.useRef<any[]>([]);
    const mousePosition = useMousePosition();
    const mouse = React.useRef<{ x: number; y: number }>({ x: 0, y: 0 });
    const canvasSize = React.useRef<{ w: number; h: number }>({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

    const rgb = React.useMemo(() => hexToRgb(color), [color]);

    const remapValue = React.useCallback((value: number, start1: number, end1: number, start2: number, end2: number): number => {
      const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
      return remapped > 0 ? remapped : 0;
    }, []);

    const drawCircle = React.useCallback((circle: any, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size, alpha } = circle;
        context.current.translate(translateX, translateY);
        context.current.beginPath();
        context.current.arc(x, y, size, 0, 2 * Math.PI);
        context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
        context.current.fill();
        context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
        if (!update) {
          circles.current.push(circle);
        }
      }
    }, [rgb, dpr]);

    const clearContext = React.useCallback(() => {
      if (context.current) {
        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
      }
    }, []);

    const circleParams = React.useCallback(() => {
      const x = Math.floor(Math.random() * canvasSize.current.w);
      const y = Math.floor(Math.random() * canvasSize.current.h);
      const translateX = 0;
      const translateY = 0;
      const pSize = Math.floor(Math.random() * 2) + size;
      const alpha = 0;
      const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
      const dx = (Math.random() - 0.5) * 0.1;
      const dy = (Math.random() - 0.5) * 0.1;
      const magnetism = 0.1 + Math.random() * 4;
      return {
        x,
        y,
        translateX,
        translateY,
        size: pSize,
        alpha,
        targetAlpha,
        dx,
        dy,
        magnetism,
      };
    }, [canvasSize, size]);

    const resizeCanvas = React.useCallback(() => {
      if (canvasContainerRef.current && canvasRef.current && context.current) {
        circles.current.length = 0;
        canvasSize.current.w = canvasContainerRef.current.offsetWidth;
        canvasSize.current.h = canvasContainerRef.current.offsetHeight;
        canvasRef.current.width = canvasSize.current.w * dpr;
        canvasRef.current.height = canvasSize.current.h * dpr;
        canvasRef.current.style.width = `${canvasSize.current.w}px`;
        canvasRef.current.style.height = `${canvasSize.current.h}px`;
        context.current.scale(dpr, dpr);
      }
    }, [dpr]);

    const drawParticles = React.useCallback(() => {
      clearContext();
      const particleCount = quantity;
      for (let i = 0; i < particleCount; i++) {
        const circle = circleParams();
        drawCircle(circle);
      }
    }, [clearContext, quantity, circleParams, drawCircle]);

    const onMouseMove = React.useCallback(() => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        const { w, h } = canvasSize.current;
        const x = mousePosition.x - rect.left - w / 2;
        const y = mousePosition.y - rect.top - h / 2;
        const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
        if (inside) {
          mouse.current.x = x;
          mouse.current.y = y;
        }
      }
    }, [mousePosition]);

    const animate = React.useCallback(() => {
      clearContext();
      circles.current.forEach((circle: any, i: number) => {
        const edge = [
          circle.x + circle.translateX - circle.size,
          canvasSize.current.w - circle.x - circle.translateX - circle.size,
          circle.y + circle.translateY - circle.size,
          canvasSize.current.h - circle.y - circle.translateY - circle.size,
        ];
        const closestEdge = edge.reduce((a, b) => Math.min(a, b));
        const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
        if (remapClosestEdge > 1) {
          circle.alpha += 0.02;
          if (circle.alpha > circle.targetAlpha) {
            circle.alpha = circle.targetAlpha;
          }
        } else {
          circle.alpha = circle.targetAlpha * remapClosestEdge;
        }
        circle.x += circle.dx + vx;
        circle.y += circle.dy + vy;
        circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
        circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
        drawCircle(circle, true);
        if (
          circle.x < -circle.size ||
          circle.x > canvasSize.current.w + circle.size ||
          circle.y < -circle.size ||
          circle.y > canvasSize.current.h + circle.size
        ) {
          circles.current.splice(i, 1);
          const newCircle = circleParams();
          drawCircle(newCircle);
        }
      });
      window.requestAnimationFrame(animate);
    }, [clearContext, circles, canvasSize, vx, vy, staticity, ease, drawCircle, remapValue, mouse, circleParams]);

    React.useEffect(() => {
      if (canvasRef.current) {
        context.current = canvasRef.current.getContext("2d");
      }
      resizeCanvas();
      drawParticles();
      animate();
      window.addEventListener("resize", resizeCanvas);
      return () => {
        window.removeEventListener("resize", resizeCanvas);
      };
    }, [color, animate, resizeCanvas, drawParticles]);

    React.useEffect(() => {
      onMouseMove();
    }, [mousePosition.x, mousePosition.y, onMouseMove]);

    React.useEffect(() => {
      resizeCanvas();
      drawParticles();
    }, [refresh, resizeCanvas, drawParticles]);

    return (
      <div className={className} ref={canvasContainerRef} aria-hidden="true">
        <canvas ref={canvasRef} className="h-full w-full" />
      </div>

    );
  };

  export default Particles;
