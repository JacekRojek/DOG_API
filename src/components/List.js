import React from 'react';
import { connect } from 'react-redux';
import { Button } from "react-bootstrap"

const ListElement = ({name, handleShow}) => 
(<Button variant="primary" onClick={handleShow}>
  {name}
</Button>)

function List({breeds, handleShow}) {
  return (
    <div className="List">
      {breeds.map(b => <ListElement handleShow={handleShow} key={b} name={b}/>)}
    </div>
  );
}

const mapStateToProps = state => ({...state.api})

const mapDispatchToProps = dispatch => ({
// simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
