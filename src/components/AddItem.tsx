import React from 'react';

type Props = {
    value: string;
    onChange: (value: string) => void;
    onClick: () => void;
}

const AddItem: React.FC<Props> = ({ value, onChange, onClick }) => {
    return (
        <div>
            <input
                className='add-item-input'
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
            />
            <button className='add-item-button' onClick={onClick}>Add</button>
        </div>
    )
}

export default AddItem