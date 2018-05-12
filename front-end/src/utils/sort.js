const Sort = {
  types: [
    { id: 'title', name: 'Title' },
    { id: 'date', name: 'Date' },
    { id: 'score', name: 'Score' }
  ],

  sortMethods: {
    title: (a, b) => {
      if (a.title > b.title) return 1
      if (a.title < b.title) return -1
      return 0
    },
    date: (a, b) => {
      if (a.date > b.date) return 1
      if (a.date < b.date) return -1
      return 0
    },
    score: (a, b) => {
      if (a.voteScore > b.voteScore) return -1
      if (a.voteScore < b.voteScore) return 1
      return 0
    }
  },

  sortPosts(posts, sortType) {
    return posts.sort(this.sortMethods[sortType])
  }
}

export default Sort
