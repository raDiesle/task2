import React from 'react';

export default function Search({searchValue, setSearchValue}) {
    return <input type="text" onChange={(event) => setSearchValue(event.target.value)}/>
}
