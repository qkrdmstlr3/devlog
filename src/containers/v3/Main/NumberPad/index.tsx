import { FirstLine } from './FirstLine';
import { SecondLine } from './SecondLine';
import * as Style from './style.css';
import { ThirdLine } from './ThirdLine';

export function NumberPad() {
  return (
    <div className={Style.Wrapper}>
      <FirstLine />
      <SecondLine />
      <ThirdLine />
    </div>
  );
}
