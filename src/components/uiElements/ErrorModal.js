import React from 'react';

import Modal from './Modal';
import Button from '../formElements/Button';

import "./errorModal.scss"

const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p className="errorText">{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
