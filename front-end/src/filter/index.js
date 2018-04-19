import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { setFilterText, setFilterCategory, setSortBy } from './actions'
import Sort from '../utils/sort'

class Filter extends React.Component {
  PropTypes: {
    categories: PropTypes.array
  }

  handleClickCategory = (name) => {
    this.props.setCategory(name)
  }

  handleChangeText = (newText) => {
    this.props.setText(newText)
  }

  handleClickSort = (sortBy) => {
    this.props.setSortBy(sortBy)
  }

  render() {
    const { categories, category, sortBy } = this.props
    console.log(this.props)
        return (
      <div className="filter-container">
        <input
          type="text"
          name="TxtFilter"
          onChange={(e) => this.handleChangeText(e.target.value)}
          value={this.props.text}
        />
        <div>
          Category:
          {categories &&
            categories.map((item) => (
              <button
                key={item}
                disabled={category === item}
                onClick={() => this.handleClickCategory(item)}>
                {item}
              </button>
            ))}
          {categories &&
            categories.map((item) => (
              <Link key={item} to={'/' + (item === 'All' ? '' : item)}>
                <button disabled={category === item}>{item}</button>
              </Link>
            ))}
        </div>
        <div>
          Sort by:
          {Sort.types.map((item) => (
            <button
              key={item.id}
              disabled={sortBy === item.id}
              onClick={() => this.handleClickSort(item.id)}>
              {item.name}
            </button>
          ))}
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
    category: state.filter.category,
    text: state.filter.text,
    sortBy: state.filter.sortBy
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCategory: (name) => dispatch(setFilterCategory({ category: name })),
    setText: (text) => dispatch(setFilterText({ text })),
    setSortBy: (sortBy) => dispatch(setSortBy({ sortBy }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
