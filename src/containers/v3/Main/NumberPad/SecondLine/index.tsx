import { MouseEvent } from 'react';
import { 지명 } from '../../../../../constants';
import { useCity } from '../../../../../contexts/CityContext';
import { useRing } from '../../../../../contexts/RingContext';
import { Number } from '../Number';
import * as Style from './style.css';

export function SecondLine() {
  const { selectCity } = useCity();
  const { updateCoordinate } = useRing();

  const onNumberClick = (event: MouseEvent<HTMLSpanElement>, number: number) => {
    const { x, y, width, height } = event.currentTarget.getBoundingClientRect();
    selectCity(지명[number]);
    updateCoordinate({ x: x + width / 2, y: y + height / 2 });
  };

  return (
    <div className={Style.Wrapper}>
      {[10, 11, 12, 13, 14, 15, 16].map((number, order) => (
        <Number
          key={number}
          number={number}
          animationDelay={3.1 + order * 0.05}
          onClick={(event) => onNumberClick(event, number)}
        />
      ))}
    </div>
  );
}
