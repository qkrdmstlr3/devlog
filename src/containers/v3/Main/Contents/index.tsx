import { Logo } from '../Logo';
import { NumberPad } from '../NumberPad';
import { StoreList } from '../StoreList';

export function Contents() {
  return (
    <>
      <NumberPad />
      <Logo />
      <StoreList />
    </>
  );
}
