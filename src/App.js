import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import NameForm from './Form';
import Person from './Person';


const initialFormValues = {
  name: '',
  email: '',
  role: ''
}



export default function App() {
  const [names, setNames] = useState([]);
  const [errorText, setErrorText] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue });
  }


  const submitForm = () => {
    const newPerson = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setNames(names.concat(newPerson));
    setFormValues(initialFormValues);

    // if (!newPerson.name || !newPerson.email || !newPerson.role){
    //   setErrorText("PLease fill all fields.");
    //   return;
    // }
    // axios.post('http://localhost:3000/', newPerson)
    // .then(res =>{
    //   setNames([res.data, ...names]);
    //   setFormValues(initialFormValues);
    //   setErrorText("");
    // }).catch(err => {
    //   console.error(err);
    // })
  }


  return (
    <div className="App">
      <h2>Hello World!</h2>
      <NameForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
        errorText={errorText}
      />
      {
        names.map(person => {
          return (
            <Person key={person.id} details={person} />
          )
        })
      }  


    </div>
  );
}

 
