import Mock from 'mockjs'


const mockRole = {
  id: '@id()',
  role: '@role()',
  btn:['1', '2', '3'],
}
const tempData = Mock.mock({'data|2': [mockRole]})

function roleList(){
  return {
    code: 200,
    data: tempData.data,
    msg: '请求成功'
  }
}

export default {
  '/menu': roleList
}