import { useState } from 'react';
import AsyncPaginate  from 'react-select-async-paginate-2'
const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const handleSearch = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placehodler='Search for city'
            debounceTimeout={600}
            value={search}
            onChange={handleSearch}
        />
    );
}

export default Search