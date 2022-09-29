import React, { useState} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : {firstName: "", lastName: "", userType: ""});
 

  const updateInput = updatedValue => {
    setInput(input => ({
      ...input,
      ...updatedValue
    }));
  }

  const handleFirstNameChange = e => {
    let updatedValue = {firstName: e.target.value};   
    updateInput(updatedValue);
  };

  const handleLastNameChange = e => {
    let updatedValue = {lastName: e.target.value};
    updateInput(updatedValue);
  };

  const handleUserTypeChange = e => {
    let updatedValue = {userType: e.target.value};
    updateInput(updatedValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      firstName: input.firstName,
      lastName: input.lastName,
      userType: input.userType
    });
    setInput({firstName: "", lastName: "", userType: ""});
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
        <h1>
          Update me
        </h1>
          <input
            placeholder='Update first name'
            value={input.firstName}
            onChange={handleFirstNameChange}
            name='text'
            className='todo-input edit'
          />
          <input
            placeholder='Update last name'
            value={input.lastName}
            onChange={handleLastNameChange}
            name='text'
            className='todo-input edit'
          />
          <input
            placeholder='Update user type'
            value={input.userType}
            onChange={handleUserTypeChange}
            name='text'
            className='todo-input edit'
          />
          <div>
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
          </div>
        </>
      ) : (
        <>
        <input
            placeholder='Add first name'
            value={input.firstName}
            onChange={handleFirstNameChange}
            name='text'
            className='todo-input edit'
          />
          <input
            placeholder='Add last name'
            value={input.lastName}
            onChange={handleLastNameChange}
            name='text'
            className='todo-input edit'
          />
          <input
            placeholder='Add user type'
            value={input.userType}
            onChange={handleUserTypeChange}
            name='text'
            className='todo-input edit'
          />
          <div>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          </div>
         
        </>
      )}
    </form>
  );
}

export default TodoForm;
