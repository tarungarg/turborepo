import React from "react"
import { Autocomplete, TextField } from '@mui/material';
import './searchBar.css'

const SeachBar = ({ setFilter, suggestions, placeholder }: { setFilter: Function, suggestions: any, placeholder: string }) => {
    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    return (
        <Autocomplete
            disablePortal
            id="search"
            freeSolo
            disableClearable
            options={suggestions}
            renderInput={(params) => {
                return <TextField onChange={search} {...params} type='search' label={placeholder} />
            }
            }
        />
    )
}
export default SeachBar
