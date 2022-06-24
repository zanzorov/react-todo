import React from 'react';

function Form(props) {
    return (
        <div className="form">
        <input
          placeholder="Write a new task.."
          type="text"
          value={props.newText}
          onChange={(e) => props.setNewText(e.target.value)}
        />
        <button onClick={props.addTodo}>add</button>
      </div>
    );
}

export default Form;