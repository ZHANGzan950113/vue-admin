import router from './router'

export default () => {
  return {
    configureServer(server) {
      server.middlewares.use(bodyParse())
      server.middlewares.use((req, res, next) => {
        // 对请求进行拦截
        // 以mock为开头的请求地址,返回mock数据
        if (req.url.startsWith('/mock')) {
          req.query = parseQuery(req._parsedUrl.query)
          if(req.body) {
            req.body =  JSON.parse(req.body)
          }
          res.writeHead(200, { 'Content-Type': 'application/json'})
          const url = req._parsedUrl.pathname.replace('/mock', '')
          if(router[url] !== undefined) {
            const result  = router[url]({method: req.method, query: req.query, body: req.body})
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
// 解析bodyParse
function bodyParse(){
  return (req, res, next)=>{
    let body;
    req.on('data', (chunk) => {
      body = chunk.toString();
    })
    req.on('end', () => {
      req.body = body;
      next()
    })
  }
}

// 解析HTML
function parseQuery(query){
  if(!query) return {}
  return query.split('&').reduce((prev, item)=>{
    const [key, value] = item.split('=');
    prev[key] = value; 
    return prev;
  },{})
}