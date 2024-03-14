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


function menu(){
  return {
    code: 200,
    data:[
      {
        id: '1',
        name: 'system',
        path: '/system',
        meta:{
          icon: 'audits',
          name: '系统管理',
        },
        children:[
          {
            id: '1-1',
            name: 'user',
            path: '/system/user',
            meta: {
              icon: 'audits',
              name: '用户管理'
            }
          },
          {
            id: '1-2',
            name: 'role',
            path: '/system/role',
            meta:{
              icon: 'audits',
              name: '角色管理'
            }
          },
          {
            id: '1-3',
            name: 'menu',
            path: '/system/menu',
            meta:{
              icon: 'audits',
              name: '菜单管理'
            }
          }
        ]
      },
      {
        id: '2',
        path: '/component',
        name: 'component',
        meta: {
          icon: 'audits',
          name: '组件管理'
        },
        children:[
          {
            id: '2-1',
            name: 'icon',
            path: '/components/icon',
            meta:{
              icon: 'audits',
              name: '图标管理'
            }
          },
          {
            id: '2-2',
            name: 'table',
            path: '/components/table',
            meta:{
              icon: 'audits',
              name: '表格管理'
            }
          }
        ],
      }
    ],
    msg: '请求成功'
  }
}


export default {
  '/menu': roleList,
  '/routes': menu
}