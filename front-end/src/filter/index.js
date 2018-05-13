import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setFilterText, setSortBy } from '../actions'
import Sort from '../utils/sort'

class Filter extends React.Component {
  PropTypes: {
    categories: PropTypes.array,
    category: PropTypes.string
  }

  handleChangeText = (newText) => {
    this.props.setText(newText)
  }

  handleClickSort = (sortBy) => {
    this.props.setSortBy(sortBy)
  }

  render() {
    const { categories, category, sortBy } = this.props

    return (
      <div className="filter-container">
        <div className="field-group">
          <div className="field-label">Filter by:</div>
          <input
            className="field-input"
            type="text"
            name="TxtFilter"
            onChange={(e) => this.handleChangeText(e.target.value)}
            value={this.props.text}
          />
        </div>
        <div className="field-group">
          <div className="field-label">Category:</div>
          <div className="button-group-inline">
            {categories &&
              categories.map((item) => (
                <Link key={item} to={'/' + (item === 'All' ? '' : item)}>
                  <button className="button green" disabled={category === item}>
                    {item}
                  </button>
                </Link>
              ))}
          </div>
        </div>
        <div className="field-group">
          <div className="field-label">Sort by:</div>
          <div className="button-group-inline">
            {Sort.types.map((item) => (
              <button
                className="button blue"
                key={item.id}
                disabled={sortBy === item.id}
                onClick={() => this.handleClickSort(item.id)}>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const names = ['All']
  if (state.category && state.category.isReady)
    names.push(...state.category.items.map((item) => item.name))
  return {
    categories: names,
    text: state.filter.text,
    sortBy: state.filter.sortBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setText: (text) => dispatch(setFilterText({ text })),
    setSortBy: (sortBy) => dispatch(setSortBy({ sortBy }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
