import React from "react";
import { Modal } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

const TOS = ({ state, setState, trigger }) => {
  return (
    <Modal className="tos-modal" trigger={trigger} closeIcon={true}>
      <Modal.Header>
        Legal Information Regarding The Kiosk and The Establishment.
      </Modal.Header>
      <Modal.Content scrolling></Modal.Content>
    </Modal>
  );
};

export default TOS;
