export default (client: any) => ({
  getHomeContent() {
    return client.get('/api/v1/promotions')
  }
})
