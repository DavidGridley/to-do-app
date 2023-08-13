import React from 'react';

import { Item } from '../types';

type Props = {
    item: Item;
    onChange: (item: Item) => void;
}

const ListItem: React.FC<Props> = ({ item, onChange }) => {
    return (
        <li>
            <span className='list-item-row'>
                <input
                    data-testid='list-item-checkbox'
                    className='list-item-checkbox'
                    type='checkbox'
                    checked={item.checked}
                    onChange={() => onChange(item)}
                />
                <p
                    className={!item.checked ? 'list-item-value' : 'list-item-value-checked'}
                >
                    {item.value}
                </p>
            </span>
        </li>
    )
}

export default ListItem