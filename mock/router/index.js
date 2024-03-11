import user from './user.js'
import role from './role.js'
import menu from './menu.js'
import login from './login.js'

export default {
  ...user,
  ...role,
  ...menu,
  ...login,
}