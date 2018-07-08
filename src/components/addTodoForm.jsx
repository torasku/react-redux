import React from 'react';

const AddTodoForm = ({onSubmit}) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {e.preventDefault()
        onSubmit(input.value)
        input.value = ""
      }}>
        <input ref={node => {input = node}} />
        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default AddTodoForm;
