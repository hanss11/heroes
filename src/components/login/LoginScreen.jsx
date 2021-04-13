import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)
    const prevPage = localStorage.getItem('path')
    const handleClick = ()=>{
        // console.log('funciona')
        // history.replace('/')
        dispatch({
            type: types.login,
            payload: {
                name: 'hanss Becerra'
            }
        });
        history.replace(prevPage?prevPage:'/');
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
