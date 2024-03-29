import { useEffect } from 'react';

type KeyType = 'ArrowUp' | 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'Escape' | 'Space';
interface KeyEvent {
  key: KeyType;
  keyEvent: (event: KeyboardEvent) => void;
}

interface KeyboardHandlerProps {
  keyEvents: KeyEvent[];
}

const keyMapper: { [key in KeyType]: string } = {
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown',
  ArrowLeft: 'ArrowLeft',
  ArrowRight: 'ArrowRight',
  Escape: 'Escape',
  Space: ' ',
};

const useKeyboard = ({ keyEvents }: KeyboardHandlerProps) => {
  const executeEvents = (event: KeyboardEvent) => {
    keyEvents.forEach(({ key, keyEvent }) => {
      if (event.key === keyMapper[key]) keyEvent(event);
    });
  };

  useEffect(() => {
    window.addEventListener('keydown', executeEvents);
    return () => window.removeEventListener('keydown', executeEvents);
  }, [keyEvents]);
};

export default useKeyboard;
