import { 지명 } from '../../../../../constants';
import { useCity } from '../../../../../contexts/CityContext';
import { useRing } from '../../../../../contexts/RingContext';
import { Number } from '../Number';
import * as Style from './style.css';

export function FirstLine() {
  const { selectCity } = useCity();
  const { updateSelectedId } = useRing();

  const onNumberClick = (number: number) => {
    selectCity(지명[number]);
    updateSelectedId({ id: `number${number}` });
  };

  return (
    <div className={Style.Wrapper}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, order) => (
        <Number
          id={`number${number}`}
          animationDelay={3.5}
          key={number}
          number={number}
          onClick={(event) => onNumberClick(number)}
        />
      ))}
    </div>
  );
}
