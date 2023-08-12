import React from 'react';
import ListItem from './ListItem';

type Props = {
    list: string[];
}

const List: React.FC<Props> = ({ list }) => {
    return (
        <ul>
            {list.map(item => <ListItem value={item} />)}
        </ul>
    )
}

export default List;