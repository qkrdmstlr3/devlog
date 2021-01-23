// Dependencies
import React, { forwardRef, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWrapper';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

interface EditorPropsWithHandlers extends EditorProps {
  onChange?: (value: string) => void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import('./TuiEditorWrapper'),
  { ssr: false }
);
const EditorWithForwardedRef = forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

interface WysiwygEditorProps {
  onChangeHandler: (content: string) => void;
  initialValue: string;
}

function WysiwygEditor({
  initialValue,
  onChangeHandler,
}: WysiwygEditorProps): React.ReactElement {
  const editorRef = useRef<EditorType>();
  const changeHandler = () => {
    if (!editorRef.current) {
      return;
    }

    const instance = editorRef.current.getInstance();
    onChangeHandler(instance.getMarkdown());
  };

  return (
    <EditorWithForwardedRef
      initialValue={initialValue}
      height="75%"
      previewStyle="vertical"
      initialEditType="markdown"
      useCommandShortcut={true}
      onChange={changeHandler}
      ref={editorRef}
    />
  );
}

export default WysiwygEditor;
