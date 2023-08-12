import React from 'react';

type Props = {
    value: string;
}

const ListItem: React.FC<Props> = ({ value }) => {
    return (
        <li>
            {value}
        </li>
    )
}

export default ListItem