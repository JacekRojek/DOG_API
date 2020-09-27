import React from 'react';
import { Button, Modal } from "react-bootstrap"

function PhotoModal({show, handleClose}) {

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Refresh
          </Button>
        </Modal.Header>
        <Modal.Body>
          Img
          {/* //TODO: IMG */}
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { PhotoModal }