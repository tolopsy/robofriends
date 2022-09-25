import React from "react";


const SearchBox = React.memo(({searchChange}) => {
  console.log('SearchBox')
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robofriends"
        onChange={searchChange}
      />
    </div>
  )
})

export default SearchBox
