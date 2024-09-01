import { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!value) return
      addTodo(value)
      setValue('')
    }
  
    return (
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a todo"
        />
        <button type="submit">Add</button>
      </form>
    )
  }