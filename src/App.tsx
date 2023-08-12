import { useState } from 'react'
import './App.css'

import AddItem from './components/AddItem'
import ListItem from './components/ListItem'


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
      <ul>
        {toDoList.map(item => <ListItem value={item} />)}
      </ul>
    </>
  )
}

export default App
