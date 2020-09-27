import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import List from './List';
import { fetchBreeds } from './redux/actions/api';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreeds());
  }, []);
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
