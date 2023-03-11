import { MainContainer } from '../containers/v3/Main';
import { CityContextProvider } from '../contexts/CityContext';
import { RingContextProvider } from '../contexts/RingContext';

function Main() {
  return (
    <RingContextProvider>
      <CityContextProvider>
        <MainContainer />
      </CityContextProvider>
    </RingContextProvider>
  );
}

export default Main;
