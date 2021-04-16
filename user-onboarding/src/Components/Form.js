import userEvent from '@testing-library/user-event';
import React from 'react'

const Form = (props) => {
    const { onChange, onSubmit, disabled, errors } = props
    const { name, email, password, tos } = props.user

    return (
        <div>
            <div style={{ color: 'red' }}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'/>
                    Name: 
                <input onChange={onChange} type='text' id='name' name='name' value={name}/>
                <label htmlFor='email'/>
                    Email: 
                <input onChange={onChange} type='text' id='email' name='email' value={email}/>
                <label htmlFor='password'/>
                    Password: 
                <input onChange={onChange} type='text' id='password' name='password' value={password}/>
                <label htmlFor='tos'/>
                    Agree to Terms of Service: 
                <input onChange={onChange} type='checkbox' id='tos' name='tos' value={tos}/>
                <button disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default Form;