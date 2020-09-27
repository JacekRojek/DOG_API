import React from 'react';
import { connect } from 'react-redux';
import { Button, ListGroup } from "react-bootstrap"
import { getRandomImg } from '../redux/actions/api';

const ListElement = ({name, onClick}) => 
(
  <Button variant="light">
    <ListGroup.Item variant="primary" onClick={onClick}>
        {name.replace(/^\w/, c => c.toUpperCase())}
    </ListGroup.Item>
  </Button>
)

function List({breeds, handleShow, getRandomImg}) {
  return (
    <ListGroup >
      {breeds.map(b => <ListElement
        key={b}
        onClick={() => {
          getRandomImg(b)
          handleShow()
        }}
        name={b} 
      />)}
    </ListGroup>
  );
}

const mapStateToProps = state => ({...state.api})

const mapDispatchToProps = dispatch => ({
  getRandomImg: (breed) => dispatch(getRandomImg(breed))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
