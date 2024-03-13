


const mockCcount = ['admin', 'user']




function login(data) {
  if(!data.body){
    return {code: 400, msg: '请求参数错误'}
  }
  const {username, password} = data.body
  console.log(username, password)
  return {
    code: 200,
    data: {token: 'admin'},
    msg: '请求成功'
  }
}

export default {
  '/login': login,
}