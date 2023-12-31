import { useState, useEffect } from 'react'
import './App.css'

import AddItem from './components/AddItem'
import ListItem from './components/ListItem'
import { Item, List } from './types'

const listKey = 'to-do-list';
const initialListItem = { value: '', checked: false };

function App() {
  const savedList = localStorage.getItem(listKey);
  const initialList = savedList ? JSON.parse(savedList) : [];
  const [listItem, setListItem] = useState<Item>(initialListItem);
  const [toDoList, setToDoList] = useState<List>(initialList);

  useEffect(() => {
    localStorage.setItem(listKey, JSON.stringify(toDoList));
  }, [toDoList]);

  const handleChange = (value: string) => {
    setListItem({ value, checked: false });
  };

  const handleClick = () => {
    const list = toDoList.concat(listItem);
    setToDoList(list);
    setListItem(initialListItem);
  };

  const handleCheck = (item: Item) => {
    const index = toDoList.findIndex(listItem => listItem.value === item.value);
    const list = [...toDoList];
    list.splice(index, 1, { ...item, checked: !item.checked });
    setToDoList(list);
  }

  return (
    <>
      <h1>To do:</h1>

      <AddItem value={listItem.value} onChange={handleChange} onClick={handleClick} />

      <ul>
        {toDoList.map(item => <ListItem key={item.value} item={item} onChange={handleCheck} />)}
      </ul>
    </>
  );
}

export default App;
