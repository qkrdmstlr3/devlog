import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface Coordinate {
  x: number;
  y: number;
}

interface ProviderProps {
  children: ReactNode;
}

interface RingContext {
  coordinate?: Coordinate;
  updateCoordinate: () => void;
  updateSelectedId: ({ id }: { id: string }) => void;
}

const DEFAULT_VALUE: RingContext = {
  coordinate: undefined,
  updateCoordinate: () => {},
  updateSelectedId: () => {},
};

export const RingContext = createContext<RingContext>(DEFAULT_VALUE);

export function RingContextProvider({ children }: ProviderProps) {
  const [selectedId, setSelectedId] = useState<string>();
  const [coordinate, setCoordinate] = useState<Coordinate>();

  const updateSelectedId = ({ id }: { id: string }) => {
    setSelectedId(id);
  };

  const updateCoordinate = useCallback(() => {
    if (!selectedId) {
      return;
    }

    const numberElement = document.getElementById(selectedId);
    if (numberElement) {
      const { x, y, width, height } = numberElement.getBoundingClientRect();
      setCoordinate({ x: x + width / 2, y: window.scrollY + y + height / 2 });
    }
  }, [selectedId]);

  useEffect(() => {
    updateCoordinate();
    window.addEventListener('resize', updateCoordinate);

    return () => window.removeEventListener('resize', updateCoordinate);
  }, [selectedId]);

  return (
    <RingContext.Provider
      value={useMemo(
        () => ({
          coordinate,
          updateCoordinate,
          updateSelectedId,
        }),
        [coordinate]
      )}
    >
      {children}
    </RingContext.Provider>
  );
}

export function useRing() {
  const ring = useContext(RingContext);

  return ring;
}
