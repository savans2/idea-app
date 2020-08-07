import React from 'react';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';


function App() {
  return (
    <div className="App container d-flex flex-wrap">
      <IdeaForm />
      <IdeaList />
    </div>
  );
}

export default App;
