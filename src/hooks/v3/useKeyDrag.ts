import { useRef } from 'react';
import { useDrag } from '../useDrag';

export function useKeyDrag() {
  const dragRef = useRef<HTMLDivElement>(null);
  const startCoordinateRef = useRef<[number, number]>([0, 0]);
  const currentCoordinateRef = useRef<[number, number]>([0, 0]);

  const onDragStart = ({ x, y }: { x: number; y: number }) => {
    console.log(x, y);
    startCoordinateRef.current = [x, y];
    currentCoordinateRef.current = [x, y];
  };

  const onDragMove = ({ x, y }: { x: number; y: number }) => {
    if (dragRef.current == null) {
      return;
    }
    const [startX, startY] = startCoordinateRef.current;
    dragRef.current.style.transform = `translate(${startX - x}px, ${startY - y}px)`;

    currentCoordinateRef.current = [x, y];
  };

  const onDragEnd = () => {
    console.log();
  };

  const { ...dragProps } = useDrag({ onDragStart, onDragMove, onDragEnd });

  return { dragRef, dragProps };
}
