import React, { useState } from 'react';
import './style.css';

const DEBOUNCE_DELAY = 500;

const Autocomplete = () => {
    const [list] = useState(['Morocco', 'Samoa', 'Cyprus', 'Guatemala', 'Guyana', 'Sao Tome and Principe', 'Kenya', 'Falkland Islands (Malvinas)', 'Zambia', 'Montserrat']);
    const [valueInput, setValueInput] = useState('');
    // const [loading, setLoading] = useState(false);

    const debounce = (func, timeout = 300) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }

    const handleSearch = debounce((e) => {
        // setLoading(true);
        setValueInput(e.target.value);
        // setLoading(false);
    }, DEBOUNCE_DELAY);

    const handleSelection = () => {
        if (valueInput !== '') {
            let listAll = list.filter(person => person.toLowerCase().includes(valueInput.toLowerCase())).map((el, i) => (
                <a key={i} className="list-item" onClick={() => handleClickUser(el)}>{el}</a>
            ))
            if (listAll.length === 0) return list.map((el, i) => (
                <a key={i} className="list-item" onClick={() => handleClickUser(el)}>{el}</a>
            ));
            return listAll;
        }
        return <></>;
    }
    const handleClickUser = (el) => {
        // setLoading(false);
        alert(`Selected: ${el}`);
    }

    return (
        <div className="wrapper">
            <h1>Autocomplete</h1>
            <div className="control">
                <input type="text" className="input" onKeyUp={(e) => handleSearch(e)} defaultValue={''} />
                {/* <img src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" alt="loading-gif" className={loading ? "loader" : "display-none"} /> */}
            </div>
            <div className="list">
                {
                    handleSelection()
                }
            </div>
        </div>
    );
}

export default Autocomplete;