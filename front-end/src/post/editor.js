import React from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { savePostEditing, cancelPostEditing } from '../actions'

class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: '', body: '', category: '' }
  }

  componentWillReceiveProps(nextProps) {
    const data = { ...nextProps.post }
    if (!data.category) data.category = nextProps.categories[0].name
    this.setState(data)
  }

  inputChanged(prop, value) {
    let obj = {}
    obj[prop] = value
    this.setState(obj)
  }

  saveClick(e) {
    e.preventDefault()
    const data = { ...this.props.post }
    data.title = this.state.title
    data.body = this.state.body
    data.category = this.state.category
    this.props.savePostEditing(data)
  }

  cancelClick(e) {
    e.preventDefault()
    this.props.cancelPostEditing()
  }

  render() {
    const { post, categories } = this.props
    const isOpen = post ? true : false
    const title = post ? post.title : ''
    return (
      <Modal isOpen={isOpen} contentLabel="Post editing" ariaHideApp={false}>
        <h2>Editing "{title}"</h2>
        <form>
          <div className="field-group">
            <div className="field-label">Title:</div>
            <input
              className="field-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={(e) => this.inputChanged('title', e.target.value)}
            />
          </div>

          <div className="field-group">
            <div className="field-label">Body:</div>
            <textarea
              className="field-input"
              name="body"
              rows="10"
              cols="80"
              value={this.state.body}
              onChange={(e) => this.inputChanged('body', e.target.value)}
            />
          </div>

          <div className="field-group">
            <div className="field-label">Category:</div>
            <select
                className="field-input"
              value={this.state.category}
              onChange={(e) => this.inputChanged('category', e.target.value)}>
              {categories.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="button-group">
            <button
              className="button green"
              onClick={(e) => this.saveClick(e)}
              disabled={!this.state.body || !this.state.title}>
              Save
            </button>
            <button className="button black" onClick={(e) => this.cancelClick(e)}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    )
  }
}

function mapStateToProps({ user, post, category }) {
  return {
    user,
    post: post.postInEditing,
    categories: category.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    savePostEditing: (post) => dispatch(savePostEditing(post)),
    cancelPostEditing: (post) => dispatch(cancelPostEditing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEditor)
