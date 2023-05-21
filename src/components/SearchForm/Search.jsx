import React from 'react';
import './Search.module.scss';

const Search = ({search}) => {
    const [value, setValue] = React.useState('');

    function handleClick(e) {
        e.preventDefault();
        if(!isEmpty()) {
            search(value);
            setValue('');
        }
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleClick(e);
        }
    }

    function isEmpty() {
        return value.trim() === '';
    }

    return (
        <form>
            <input
                type="text"
                placeholder="Enter location"
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => handleKeyDown(e)}
            />
            <button
                onClick={e => handleClick(e)}
                type="submit"
            >
                Search
            </button>
        </form>

    );
};

export default Search;