import React from 'react';
import { Button, Image, Modal } from "react-bootstrap"
import { connect } from 'react-redux';
import { getRandomImg } from '../redux/actions/api';

function PhotoModal({show, handleClose, imgURL, selectedBreed, getRandomImg}) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Button variant="secondary" onClick={() => getRandomImg(selectedBreed)}>
            New
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Image rounded fluid src={imgURL} />
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapStateToProps = state => ({...state.api})
const mapDispatchToProps = dispatch => ({
  getRandomImg: (breed) => dispatch(getRandomImg(breed))
})

export default connect(mapStateToProps, mapDispatchToProps)(PhotoModal);