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


function permission(){
  return {
    code: 200,
    data:[
      {
        id: '1',
        name: '系统管理',
        children:[
          {
            id: '1-1',
            name: '用户管理',
          },
          {
            id: '1-2',
            name: '角色管理',
          },
          {
            id: '1-3',
            name: '菜单管理',
          }
        ]
      }
    ],
    msg: '请求成功'
  }
}


export default {
  '/menu': roleList,
  '/routes': permission
}