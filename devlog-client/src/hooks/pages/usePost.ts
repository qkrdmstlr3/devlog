// Dependencies
import { useRef, RefObject } from 'react';

interface UsePostType {
  contentRef: RefObject<HTMLDivElement>;
}

function usePost(): UsePostType {
  const contentRef = useRef<any>();

  return { contentRef };
}

export default usePost;
