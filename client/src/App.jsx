import React from 'react';
import Navbar from './components/Navbar';
import CreateSnippet from './components/CreateSnippet';

const App = () => {
  return (
    <div className='container max-w-4xl mx-auto p-4'>
      <Navbar />
      <CreateSnippet />
    </div>
  );
}

export default App;
