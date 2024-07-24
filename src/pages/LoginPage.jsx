import { useState } from "react";
import { req } from '../axios_helper.js'
import { setAuthToken } from "../axios_helper.js";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate()

    const [dataLogin, setDataLogin] = useState({
        username: '',
        password: ''
    })

    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setDataLogin({...dataLogin, [name]: value})
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        req('POST', '/auth/login', dataLogin)
        .then(
            response => {
                setAuthToken(response.data.jwtToken)
                navigate("/products-page")
                }
            )
        .catch(console.warn);

        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input name='username' type='email' value={dataLogin.username} onChange={handleOnChange}/>
            <label>Password:</label>
            <input name='password' type='password' value={dataLogin.password} onChange={handleOnChange}/>
            <button type="submit"/>
        </form>
    </div>
  )
}
