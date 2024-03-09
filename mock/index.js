import router from './router'

export default () => {
  return {
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // 对请求进行拦截
        // 以mock为开头的请求地址,返回mock数据
        if (req.url.startsWith('/mock')) {
          res.writeHead(200, { 'Content-Type': 'application/json' })
          const url = req.url.replace('/mock', '')
          if(router[url] !== undefined) {
            const result  = router[url](req.method)
            res.end(JSON.stringify(result))
          }else {
            res.end(JSON.stringify({code :400, msg: '请求失败'}))
          }

        } else {
          // 对其他请求不做处理，继续下一个中间件
          next()
        }
      })
    }
  }
}
