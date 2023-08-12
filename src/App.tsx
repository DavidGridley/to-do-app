import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'


function App() {
  const [listItem, setListItem] = useState<string>('')
  const [toDoList, setToDoList] = useState<string[]>([])

  const handleChange = (value: string) => {
    setListItem(value)
  }

  const handleClick = () => {
    const list = toDoList.concat(listItem);
    setToDoList(list)
    setListItem('')
  }

  return (
    <>
      <h1>To do:</h1>
      <AddItem value={listItem} onChange={handleChange} onClick={handleClick} />
      {toDoList}
    </>
  )
}

export default App
