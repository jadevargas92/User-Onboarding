import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import React, { useState, useEffect } from 'react'
import User from './Components/User'
import * as yup from 'yup'
import axios from 'axios';

//Normally the schema would be in a separate file
const schema = yup.object().shape({
  name: yup.string().required('User Name Is Required'). min(6, 'User Needs To Be At Least 6 Characters'),
  email: yup.string().email().required('Email Is Required'),
  password: yup.string().required('Please Enter your password').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
  tos: yup.boolean().oneOf([true], 'You must Agree To Terms Of Service')
})

function App() {
  const initialUserData = {
    name: '',
    email: '',
    password: '',
    tos: false 
  }

  const initialErrorValues = {
    name: '',
    email: '',
    password: '',
    tos: '' 
  }

  const [user, setUser] = useState(initialUserData);
  const [errors, setErrors] = useState(initialErrorValues)
  const [userList, setUserList] = useState([])
  const [disabled, setDisabled] = useState(true)

  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const onChange = event => {
    const { name, value, type, checked} = event.target;
    const valueToUse = type === 'checkbox' ? checked : value
    setFormErrors(name, valueToUse)
    setUser({...user, [name]: valueToUse})
  }

  const onSubmit = event => {
    event.preventDefault();
    const newUser = {
      name: user.name.trim(),
      email: user.email.trim(),
      password: user.password.trim(),
      tos: user.tos,
    }
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log(res.data)
      setUserList([...userList, newUser])
      setUser(initialUserData)
    })
    .catch(err=> {
      console.log(err)
    })

    
  }

  useEffect(() => {
    schema.isValid(user).then(valid=> setDisabled(!valid))
  }, [user])

  return (
    <div className="App">
      <h1>Jade's Form for Lambda</h1>
      <Form user={user} onChange={onChange} onSubmit={onSubmit} disabled={disabled} errors={errors}/>
      <User userList={userList} />
    </div>
  );
}

export default App;
