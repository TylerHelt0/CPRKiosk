import React from 'react'
import {Route} from 'react-router-dom'

import Checkin from '../Pages/CheckIn'
import Landing from '../Pages/Landing'

const Routes = ({state}) => {
    return(
        <>
        <Route exact path='/' render={()=><Landing state={state}/>}></Route>
        <Route path='/CheckIn' render={()=><Checkin state={state} />}></Route>
        {/* <Route path='/' render={()=><Landing />}></Route> */}
        </>
    )
}

export default Routes