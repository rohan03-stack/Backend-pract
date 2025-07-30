import React, { use, useState } from 'react'
import{useDispatch} from 'react-redux'
import {signUpThunk} from '../Features/SignIn/SignUpReducer'

export const SignUp = () => {
    const dispatchSignUp   = useDispatch();

    const fields = [
      {
        name: 'username', type: 'text', placeholder: 'Enter your username', label: 'Username', required: true
      },
       {
        name: 'email', type: 'email', placeholder: 'Enter your email', label: 'Email', required: true
      },
       {
        name: 'password', type: 'password', placeholder: 'Enter your password', label: 'Password', required: true
      },
       {
        name: 'ConfirmPassword', type: 'password', placeholder: 'Enter your confirm passowrd', label: 'Confirm Password', required: true
      }
    ];

    const[form, setForm]  = React.useState(() => {
      return fields.reduce((acc,field)=> {
        acc[field.name] = '';
        return acc;
      }, {})
    })

     const handleSubmit = (e) => {
        e.preventDefault()
        dispatchSignUp(signUpThunk(form));
    }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }


  return (
    <>
         <form onSubmit={handleSubmit} style={{ border: "1px solid red", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
               

                {
                    fields?.map((el, i) => {
                        return (
                            <div key={i}>
                                <label htmlFor={el.name}>{el.label}</label>
                                <input
                                    type={el.type}
                                    name={el.name}
                                    id={el.id}
                                    placeholder={el.placeholder}
                                    value={form[el.name]}
                                    onChange={(e) => handleChange(e)}
                                    required={el.required}
                                />
                            </div>
                        )
                    })
                }
                <button type="submit">Submit</button>
            </form >
    </>
  );
};
