import aixos from '@/http'

export function getUser() {
  return aixos({
    url: '/mock/user',
    method: 'get'
  })
}
export function addUser() {
  return aixos({
    url: '/mock/user',
    method: 'post'
  })
}
export function editUser() {
  return aixos({
    url: '/mock/user',
    method: 'put'
  })
}
export function delUser() {
  return aixos({
    url: '/mock/user',
    method: 'delete'
  })
}