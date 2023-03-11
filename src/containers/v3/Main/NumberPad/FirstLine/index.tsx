import { MouseEvent } from 'react';
import { 지명 } from '../../../../../constants';
import { useCity } from '../../../../../contexts/CityContext';
import { useRing } from '../../../../../contexts/RingContext';
import { Number } from '../Number';
import * as Style from './style.css';

export function FirstLine() {
  const { selectCity } = useCity();
  const { updateCoordinate } = useRing();

  const onNumberClick = (event: MouseEvent<HTMLSpanElement>, number: number) => {
    const { x, y, width, height } = event.currentTarget.getBoundingClientRect();
    selectCity(지명[number]);
    updateCoordinate({ x: x + width / 2, y: y + height / 2 });
  };

  return (
    <div className={Style.Wrapper}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number, order) => (
        <Number
          key={number}
          number={number}
          animationDelay={3 + order * 0.005}
          onClick={(event) => onNumberClick(event, number)}
        />
      ))}
    </div>
  );
}
