import { useState } from "react";
import './search.css'
import searchIcon from '../../assets/search-svgrepo-com.svg'

export default function Search({onSearch}) {
    const [value, setValue] = useState("")

    function handleSearch() {
        onSearch(value)
    }

    return (
        <div className="input-bar">
            <input type="text" placeholder="Sua cidade" value={value} onChange={(e) => setValue(e.target.value)}/>
            <img src={searchIcon} onClick={() => handleSearch()}/>
        </div>
    )
}