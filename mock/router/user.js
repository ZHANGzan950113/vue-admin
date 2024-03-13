
import Mock from 'mockjs'

const mockUser = {
  id:"@id()", //得到随机的id
  name:"@cname()", //随机的用户名
  date:"@date()", //随机生成日期
  avatar:"@image('200x200', '#000000', '#fff', 'avatar')", //生成图片
  email:"@email()", //得到随机的id,对象
  role: 'admin'
}
/**
 * tempData {Array}
 *模拟数据
 */
const tempData = Mock.mock({'data|10': [mockUser]})

function userList() {
  return {
    code: 200,
    data: tempData.data,
    msg: '请求成功'
  }
}
function add (data) {
  const internalData = Mock.mock({id:"@id()",...data})
  tempData.data.push(internalData)
  return {
    code: 200,
    data: tempData.data,
    msg: '新增成功'
  }
}
function edit (data) {
  tempData.data.map(item => {
    if(item.id ===data.id) {
      item = {...data}
    }
  })
  return {
    code: 200,
    data: tempData.data,
    msg: '修改成功'
  }
}
function del(data) {
  const indexToRemove = tempData.data.findIndex(item => item.id === data.id);
  if (indexToRemove !== -1) {
    tempData.data.splice(indexToRemove, 1);
    return {
      code: 200,
      data: tempData.data,
      msg: '删除成功'
    }
  }
}

const handle = {
  'GET': userList,
  'POST': add,
  'PUT': edit,
  'DELETE': del,
}





function user(obj){
  return handle[obj.method]()
}

function userInfo(){
  return {
    code: 200,
    data:{
      name:'张赞',
      age:16,
      sex:1,
      role:['admin']
    }
  }
}

export default {
  '/user': user,
  '/userInfo': userInfo,
}