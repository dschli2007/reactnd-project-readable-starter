function ServerAPI(url = 'http://localhost:3001') {
  this.url = url

  return {
    getPosts: () => {
      const targetUrl = `${url}/posts`
      return fetch(targetUrl, {
        headers: { Authorization: 'readable-cli' },
        method: 'GET'
      })
    }
  }
}

export default ServerAPI
