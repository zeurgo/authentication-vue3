export default httpClient => ({
  login: ({ email, password }) => {
    return httpClient.post('/login', {
      email,
      password
    })
  }
})
