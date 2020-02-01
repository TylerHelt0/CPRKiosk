import React from 'react'
import { Route,useHistory } from 'react-router-dom'

//Loading other react components for use as app 'pages'
import Checkin from '../Pages/CheckIn'
import Landing from '../Pages/Landing'
import ThankYou from '../Pages/ThankYou'
import Ticket from '../Pages/Ticket'

//prop from previous component 'state' destructured for use as 
// 'state' in this Component, and passed to children
const Routes = ({ state,setState }) => {

    const history = useHistory()
    console.log("History: ",history.location)
    return (
    <>
        {/* List of react components and the address bar paths that 
        render them */}
        <Route exact path='/' render={() => <Landing state={state} setState={setState}/>}></Route>
        <Route path='/CheckIn' render={() => <Checkin state={state} setState={setState}/>}></Route>
        <Route path='/ThankYou' render={() => <ThankYou />}></Route>
        <Route path='/Ticket' render ={() => <Ticket state={state} setState={setState}/>}></Route>


    </>)
}

// When react components are rendered by other components, they are used like html
// elements e.g. Landing is <Landing /> CheckIn is <CheckIn />. This will render 
// the entire react component at the tags CaretPosition.

export default Routes