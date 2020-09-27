import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import List from './components/List';
import PhotoModal from './components/Modal';
import { fetchBreeds } from './redux/actions/api';

function App() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBreeds());
  });
  return (
    <div className="App">
      <List handleShow={handleShow}/>
      <PhotoModal show={show} handleClose={handleClose}/>
    </div>
  );
}

export default App;
