import React, { createContext, useState } from 'react';
import './App.css';
import UseContextHook from './UseContextHook';

export const AppContext = createContext(null);

function App() {
  const [userName, setUserName] = useState('Christo');
  const contextValue = {
    userName,
    setUserName
  }
  return (
    <AppContext.Provider value={contextValue}>
      <p className='text-center bold'>React Hooks</p>
      <UseContextHook/>
    </AppContext.Provider>
  )
}

export default App