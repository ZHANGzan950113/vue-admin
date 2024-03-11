


const mockCcount = ['admin', 'user']




function login(req) {
  // const {username, password} = req.body
  return {
    code: 200,
    data: {token: 'mock-token'},
    msg: '请求成功'
  }
}

export default {
  '/login': login,
}