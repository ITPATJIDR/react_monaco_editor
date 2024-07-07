// App.tsx
import React from 'react';
import MonacoEditor from './MonacoEditor.tsx';

const App: React.FC = () => {
  return (
    <div style={{ height: '100vh', width: "100vw"}}>
      <MonacoEditor value="// type your code here" language="javascript" />
    </div>
  );
}

export default App;
