import { useState } from "react";
import { req } from "../utils/axios_helper";
import {Input} from './Input'


function AuthUserForm() {
  
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    username: "",
    password: "",
  });
  
  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    req("POST", "/auth/register", formData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <Input
          name="name"
          type="text"
          value={formData.name}
          handleOnChange={handleOnChange}
        />
        <label>phone</label>
        <Input
          name="phone"
          type="number"
          value={formData.phone}
          handleOnChange={handleOnChange}
        />
        <label>email</label>
        <Input
          name="username"
          type="email"
          value={formData.username}
          handleOnChange={handleOnChange}
        />
        <label>password</label>
        <Input
          name="password"
          type="password"
          value={formData.password}
          handleOnChange={handleOnChange}
        />

        <button type="submit"></button>
      </form>
    </>
  );
}

export default AuthUserForm;
