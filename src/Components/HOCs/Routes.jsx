/* eslint-disable react/prop-types */
import React from 'react'
import { Route } from 'react-router-dom'

import Checkin from '../Pages/CheckIn'
import Landing from '../Pages/Landing'

const Routes = ({ state,setState }) => {
    return (
    <>
        <Route exact path='/' render={() => <Landing state={state} />}></Route>
        <Route path='/CheckIn' render={() => <Checkin state={state} setState={setState}/>}></Route>
    </>)
}

export default Routes