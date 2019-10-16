import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSortType, updateLangType } from '../actions/psp.js';

class Filters extends Component {
  constructor(props) {
    super(props);
  }

  onSortTypeChange = (e) => {
    this.props.updateSortType(e.target.value)
  }

  onLangTypeChange = (e) => {
    this.props.updateLangType(e.target.value)
  }

  render() {
    const langOptions = this.props.langTypes && Object.keys(this.props.langTypes).map(key => (
      <option key={key} value={key}>{this.props.langTypes[key]}</option>
    ));

    const orderOptions = this.props.orders && Object.keys(this.props.orders).map(key => (
      <option key={key} value={key}>{this.props.orders[key]}</option>
    ));

    return (
      <div>
        <form className='filter-form'>
          <h1>Filters:</h1>
          <div className="form-group">
            <label htmlFor="language-type">Language Type:</label>
            <select className="form-control" id="language-type" name="language-type" onChange={this.onLangTypeChange}>
              {langOptions}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sort-by">Sort by stars:</label>
            <select value={this.props.selectedOrder} className="form-control" id="sort-by" name="sort-by" onChange={this.onSortTypeChange}>
              {orderOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

Filters.propTypes = {
  langTypes: PropTypes.object,
  orders: PropTypes.object,
  selectedOrder: PropTypes.string,
  updateSortType: PropTypes.func,
  updateLangType: PropTypes.func
};

const mapStateToProps = state => ({
  langTypes: state.posts.initialConfig.langTypes,
  orders: state.posts.initialConfig.orders,
  selectedOrder: state.posts.selectedOrder
});

const mapDispatchToProps = {
  updateSortType,
  updateLangType
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
