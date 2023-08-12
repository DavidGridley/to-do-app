import { useState } from 'react'
import './App.css'

import AddItem from './components/AddItem'
import ListItem from './components/ListItem'
import { Item, List } from './types'

const initialListItem = { value: '', checked: false };

function App() {
  const [listItem, setListItem] = useState<Item>(initialListItem);
  const [toDoList, setToDoList] = useState<List>([]);

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
        {toDoList.map(item => <ListItem item={item} onChange={handleCheck} />)}
      </ul>
    </>
  );
}

export default App;
