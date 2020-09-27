import React from 'react';
import { connect } from 'react-redux';

const ListElement = ({name}) => <p >{name}</p>

function List({breeds}) {
  return (
    <div className="List">
      {breeds.map(b => <ListElement key={b} name={b}/>)}
    </div>
  );
}

const mapStateToProps = state => ({...state.api})

const mapDispatchToProps = dispatch => ({
// simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
