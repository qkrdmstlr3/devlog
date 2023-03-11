import React, { useCallback, useState } from 'react';

type Position = {
  type: 'dragStart' | 'dragMove' | 'dragEnd';
  x: number;
  y: number;
};

type UseDragParams = {
  onDragStart: (position: Position, event?: React.TouchEvent) => void;
  onDragMove: (position: Position, event?: React.TouchEvent) => void;
  onDragEnd: (position: Pick<Position, 'type'>, event?: React.TouchEvent) => void;
};

export function useDrag({ onDragStart, onDragMove, onDragEnd }: UseDragParams) {
  const [isDragging, setIsDragging] = useState(false);

  const start = useCallback(
    (position: Omit<Position, 'type'>, event: React.TouchEvent | undefined) => {
      setIsDragging(true);
      onDragStart({ type: 'dragStart', ...position }, event);
    },
    [onDragStart]
  );

  const move = useCallback(
    (position: Omit<Position, 'type'>, event: React.TouchEvent | undefined) => {
      onDragMove({ type: 'dragMove', ...position }, event);
    },
    [onDragMove]
  );

  const end = useCallback(
    (event?: React.TouchEvent) => {
      setIsDragging(false);
      onDragEnd({ type: 'dragEnd' }, event);
    },
    [onDragEnd]
  );

  // touch
  const onTouchEnd = end;

  const onTouchMove = useCallback(
    (event: React.TouchEvent) => {
      const touches = event.touches[0];
      move({ x: touches.clientX, y: touches.clientY }, event);
    },
    [move]
  );

  const onTouchStart = useCallback(
    (event: React.TouchEvent) => {
      setIsDragging(true);
      const touches = event.touches[0];
      start({ x: touches.clientX, y: touches.clientY }, event);
    },
    [start]
  );

  // mouse

  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      move({ x: event.clientX, y: event.clientY }, undefined);
    },
    [move]
  );

  const onMouseUp = useCallback(() => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    end();
  }, [end, onMouseMove]);

  const onMouseDown = (event: React.MouseEvent) => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    start({ x: event.clientX, y: event.clientY }, undefined);
  };

  return {
    isDragging,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
  };
}
