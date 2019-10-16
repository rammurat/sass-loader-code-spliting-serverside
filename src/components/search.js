import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearch } from '../actions/psp.js';
import styled from 'styled-components'

const SearchStyle = styled.div`
  margin-bottom: 40px;
  input{
    min-width: 300px;
  }
`

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.updateSearch(this.state.value)
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <SearchStyle>
        <form onSubmit={this.onSubmit} className="form-inline">
          <div className="form-group mx-sm-3 mb-2">
            <label className="sr-only">Password</label>
            <input type="text" value={this.state.value} className="form-control" name="search" id="search" placeholder="JavaScript" onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Search</button>
        </form>
      </SearchStyle>
    );
  }
}

Search.propTypes = {
  updateSearch: PropTypes.func
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  updateSearch
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
