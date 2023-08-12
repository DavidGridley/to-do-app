import { useState } from 'react'
import './App.css'


function App() {
  const [listItem, setListItem] = useState<string>('')

  const handleChange = (value: string) => {
    setListItem(value)
  }

  return (
    <>
      <h1>To do:</h1>
      <div>
        <input
          value={listItem}
          onChange={(event) =>
            handleChange(event.target.value)
          }
        />
      </div>
    </>
  )
}

export default App
