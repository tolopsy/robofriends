import React, {useState} from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import { robots } from "../robots";
import Scroll from "../components/Scroll";
import './App.css'

const App = () => {
  const [searchField, setSearchField] = useState('')
  const filteredRobots  = robots.filter(robot => robot.name.toLowerCase().includes(searchField))
  const searchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={searchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default App