import React from 'react';
 
function SearchComponent({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Welcome to Sneakerz </h1>
            <h3> One Place For All Your Shoe needs!</h3>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                />
            </div>
        </header>
    );
}
 
export default SearchComponent;