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
            <Modal.Header>Terms of Service</Modal.Header>
            <Modal.Content scrolling>
                <h1>IMPORTANT: ALL devices should be 
                backed-up by customer prior to leaving them for repair with Provider.</h1>
                <h2>Limited Warranty and Limitation of Liability.</h2>
                <p>PT Tech shall 
                hereinafter be referred to as "Provider." Provider warrants to Customer that,
                at the time and place of delivery of the repaired product,
                and for as long as Customer owns the product repaired, the work performed 
                by Provider shall be free of defects with regards to the repairs made by 
                Provider, and that said repairs are properly performed, as long as the 
                product is free from both apparent and hidden liquid damage at the time it 
                is delivered to Provider. THIS LIMITED WARRANTY DOES NOT COVER LIQUID OR PHYSICAL DAMAGE.
                </p>
                <p>
                Provider's liability for all claims arising out of this agreement, 
                the work performed by Provider, and this limited warranty shall be limited to 
                free repairs of any defective work that was performed by Provider. 
                In no event shall Provider be liable for any loss of data, 
                data breaches, loss of the product repaired by Provider, 
                loss of profits, or other special, incidental, consequential or indirect damages 
                arising from or in relation to this agreement or the services provided by 
                Provider to Customer, however caused the regardless of theory of liability. 
                This limitation will apply even if Provider has been advised or is aware of 
                the possibility of such damages. This limited warranty does not cover 
                damage to the repaired product caused by Customer.
                </p>
                <p>
                Further, any product or accessory that is provided with its own warranty
                from the manufacturer of said product or accessory will be covered by 
                that warranty only, without any warranty from Provider; and Provider will not be held
                liable for the loss of any manufacturer's warranty due to any product disassembly
                performed by Provider. Under no circumstances is physical or water damage covered by the limited warranty offered
                by Provider.
                </p>
                <h2>
                Deposits.
                </h2>
                <p>
                All deposits for Special Order parts, i.e. any parts 
                that must be ordered and are not available in-store, are non-refundable.
                Sale of Left Property. Customer hereby agrees that if the product is left with Provider for more than thirty (30) 
                Days after repairs have been made to the product, and the Product is ready to be retrieved by Customer, 
                and Customer owes Provider for repairs made, the Product shall be sold to Provider by Customer for the 
                consideration of forgiveness of all amounts owed to Provider for such repairs. In such case, title to the product shall vest with Provider and Customer shall not owe
                Provider for such repairs made.
                </p>
                <p className='TOS-sign'>
                By signing, CUSTOMER WILL AGREE TO PAY A NON-REFUNDABLE BENCH FEE OF $20 (Plus tax) TO THE PROVIDER FOR ATTEMPTING TO REPAIR MY DEVICE. If device is repairable, bench fee will go towards cost of repair.
                </p>
                <p className='TOS-sign'>
                By signing, CUSTOMER certifies that they have read, understand and agree to the provisions and policies of this Customer Service Agreement as set forth above.
                </p>
                <p>Signature: </p>
                <SignaturePad
                    canvasProps={{
                        className: "signature"
                    }}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={handleClick('false')}><Icon name='remove'></Icon>Disagree</Button>
                <Button onClick={handleClick('true')}><Icon name='checkmark'></Icon>Agree</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default TOS