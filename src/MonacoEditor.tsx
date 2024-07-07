import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';

interface MonacoEditorProps {
  value: string;
  language: string;
}

const MonacoEditor: React.FC<MonacoEditorProps> = ({ value, language }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let editor: monaco.editor.IStandaloneCodeEditor | undefined;
    
    if (editorRef.current) {
      editor = monaco.editor.create(editorRef.current, {
        value,
        language,
      });
    }

    return () => {
      editor?.dispose();
    };
  }, [value, language]);

  return <div ref={editorRef} style={{ height: '100vh', width: '100%' }} />;
}

export default MonacoEditor;
