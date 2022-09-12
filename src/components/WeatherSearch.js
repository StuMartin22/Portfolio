import { AsyncPaginate } from "react-select-async-paginate"
import { LocationAPI, LocationAPI_URL } from '../constants/api_fetch'
import { useState } from "react";

const SearchBar = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (searchInput) => {
        return fetch(`${LocationAPI_URL}/cities?limit=5&minPopulation=10000&namePrefix=${searchInput}`, LocationAPI)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.regionCode}, ${city.countryCode} `,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    // const handleOnSearchChange = (searchData) => {
    //     console.log(searchData)
    // }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Name of City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange} 
            loadOptions={loadOptions}
            />
    )
}

export default SearchBar;