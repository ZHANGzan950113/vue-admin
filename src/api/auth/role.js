import aixos from '@/http'

export function getRole() {
  return aixos({
    url: '/mock/role',
    method: 'get'
  })
}
export function addRole() {
  return aixos({
    url: '/mock/role',
    method: 'post'
  })
}
export function editRole() {
  return aixos({
    url: '/mock/role',
    method: 'put'
  })
}
export function delRole() {
  return aixos({
    url: '/mock/role',
    method: 'delete'
  })
}