import _ from 'lodash'
import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import SignaturePad from 'react-signature-canvas'

import 'semantic-ui-css/semantic.min.css'

const TOS = ({state,setState,trigger}) => {

    const handleClick = (key) => {
        return () => setState({...state, tosAccepted:key})
    }

    return (
        <Modal className='tos-modal' trigger={trigger} closeIcon={true}>
            <Modal.Header>Legal Information Regarding The Kiosk and The Establishment.</Modal.Header>
            <Modal.Content scrolling>
                
            </Modal.Content>
        </Modal>
    )
}

export default TOS