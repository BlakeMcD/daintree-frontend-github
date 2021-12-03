import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../actions/actionCreator'


function NavStores() {

    const count = useSelector(state => state.count)

    const dispatch = useDispatch()

    return (
        <>
                <button onClick={() => dispatch(increment())}>Increment Count</button>
                <p>Count: {count}</p>
            
        </>
    )
}

export default NavStores
