import { 지명 } from '../../../../../constants';
import { useCity } from '../../../../../contexts/CityContext';
import { useRing } from '../../../../../contexts/RingContext';
import { Number } from '../Number';
import * as Style from './style.css';

export function ThirdLine() {
  const { selectCity } = useCity();
  const { updateSelectedId } = useRing();

  const onNumberClick = (number: number) => {
    selectCity(지명[number]);
    updateSelectedId({ id: `number${number}` });
  };

  return (
    <div className={Style.Wrapper}>
      {[17, 18, 19, 20, 21, 22, 23].map((number, order) => (
        <Number
          id={`number${number}`}
          key={number}
          animationDelay={3.5}
          number={number}
          onClick={(event) => onNumberClick(number)}
        />
      ))}
    </div>
  );
}
