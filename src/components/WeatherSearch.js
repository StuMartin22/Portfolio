import { AsyncPaginate } from "react-select-async-paginate"

const searchBar = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (searchInput) => {
        
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