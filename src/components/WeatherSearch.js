import { AsyncPaginate } from "react-select-async-paginate"
import { LocationAPI, LocationAPI_URL } from '../constants/api_fetch'

const searchBar = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (searchInput) => {
        return fetch(`${LocationAPI}/cities?limit=5&minPopulation=10000&namePrefix=${searchInput}`, LocationAPI_URL)
        .then(response => response.json())
        .then(response => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.lat} ${city.long}`,
                        label: `${city.name}, ${city.regionCode}, ${city.countryCode} `,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

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

export default searchBar