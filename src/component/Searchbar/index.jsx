import React from 'react';

const Searchbar = (props) => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <input 
                className="form-control mt-4 mr-sm-2 text" 
                type="search" 
                placeholder="Cari Surah" 
                aria-label="Search"
                onChange = {props.onHandleInput}
                value = {props.searchValue}
                style = 
                {{
                    width: '40rem' 
                }}
                />
            </div>
        </div>
    )
}

export default Searchbar