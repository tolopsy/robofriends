import React from "react";


const Header = React.memo(() => {
  console.log('Header')
  return <h1 className="f1">RoboFriends</h1>
})

export default Header
