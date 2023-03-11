import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { 지명 } from '../constants';

interface CityProps {
  children: ReactNode;
}

interface CityContext {
  city?: typeof 지명[number];
  selectCity: (city: typeof 지명[number]) => void;
}

const DEFAULT_VALUE: CityContext = { city: undefined, selectCity: () => {} };

export const CityContext = createContext<CityContext>(DEFAULT_VALUE);

export function CityContextProvider({ children }: CityProps) {
  const [selected지명, setSelected지명] = useState<typeof 지명[number]>();

  const selectCity = (city: typeof 지명[number]) => setSelected지명(city);

  return (
    <CityContext.Provider value={useMemo(() => ({ city: selected지명, selectCity }), [selected지명])}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const city = useContext(CityContext);

  return city;
}
