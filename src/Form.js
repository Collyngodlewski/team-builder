import React from 'react';

export default function NameForm(props) {
    const { values, update, submit, errorText } = props

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }


    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return(
        <form className='form container' onSubmit={onSubmit}>
            <h2 className="error">{errorText}</h2>
            <div className="form-group inputs">
                <label>Name
                    <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    maxLength='30'
                    placeholder="Enter your Name"
                    />
                </label>
                <label>Email
                    <input 
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="Enter Email"
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=""> -- Select a role -- </option>
                        <option value="Student"> Student</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Frontend Engineer">Frontend Engineer</option>
                        <option value="Designer">Designer</option>
                    </select>
                </label>
                
            <div className='submit'>
                <button>submit</button>
            </div>
        </div>
    </form>)}





    







