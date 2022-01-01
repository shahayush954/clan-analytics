import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchClanData } from "../redux/actions/apiCalls";
import { connect } from "react-redux";

class SearchBar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    }
  }
  
  handleSerachBarChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    this.props.fetchClanData(this.state.searchText);
  }

  render() {
    return (
      <div className='searchBar__container'>
        <div className='searchBar__iconContainer'>
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <input
          className='searcBar__input'
          name="searchText"
          onChange={this.handleSerachBarChange}
        />
        <button
          className='searchBar__submit'
          onClick={this.handleSubmit}
        >See Analysis</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapActionsToProps = {
  fetchClanData
}

export default connect(mapStateToProps, mapActionsToProps)(SearchBar);