import React from 'react';
import { Editor, EditorProps } from '@toast-ui/react-editor';

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

function TuiEditorWrapper(
  props: TuiEditorWithForwardedProps
): React.ReactElement {
  return <Editor {...props} ref={props.forwardedRef} />;
}

export default TuiEditorWrapper;
