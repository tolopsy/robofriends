import React, { useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import Header from "../components/Header";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
import './App.css'
import { setSearchField, requestRobots  } from "../actions";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchRobots: () => dispatch(requestRobots())
  }
}

const App = (props) => {
  const { searchField, onSearchChange, robots, isPending, fetchRobots } = props
  const filteredRobots  = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))

  useEffect(() => {
    fetchRobots()
  }, [fetchRobots])

  return isPending ? <h1>Loading</h1> : (
    <div className="tc">
      <Header />
      <SearchBox searchChange={onSearchChange}/>
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)