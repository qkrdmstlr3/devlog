import { createContext, ReactNode, useContext, useMemo, useState } from 'react';

interface Coordinate {
  x: number;
  y: number;
}

interface ProviderProps {
  children: ReactNode;
}

interface RingContext {
  coordinate?: Coordinate;
  updateCoordinate: ({ x, y }: Coordinate) => void;
}

const DEFAULT_VALUE: RingContext = {
  coordinate: undefined,
  updateCoordinate: () => {},
};

export const RingContext = createContext<RingContext>(DEFAULT_VALUE);

export function RingContextProvider({ children }: ProviderProps) {
  const [coordinate, setCoordinate] = useState<Coordinate>();

  const updateCoordinate = ({ x, y }: Coordinate) => {
    setCoordinate({ x, y });
  };

  return (
    <RingContext.Provider
      value={useMemo(
        () => ({
          coordinate,
          updateCoordinate,
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
