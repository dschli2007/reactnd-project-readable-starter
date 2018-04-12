import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFilterText, setFilterCategory } from './actions'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { category: 'All', text: '' }
  }

  PropTypes: {
    categories: PropTypes.array
  }

  handleClickCategory = (name) => {
    this.props.setCategory(name)
  }

  handleChangeText = (newText) => {
    this.props.setText(newText)
  }

  render() {
    const { categories, category } = this.props

    return (
      <div className="filter-container">
        <input
          type="text"
          name="TxtFilter"
          onChange={(e) => this.handleChangeText(e.target.value)}
          value={this.props.text}
        />
        <div>
          Show:
          {categories &&
            categories.map((item) => (
              <button
                key={item}
                disabled={category === item}
                onClick={() => this.handleClickCategory(item)}>
                {item}
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
    text: state.filter.text
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setCategory: (name) => dispatch(setFilterCategory({ category: name })),
    setText: (text) => dispatch(setFilterText({ text }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
