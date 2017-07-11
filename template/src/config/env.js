//api请求基路径
let baseUrl
//图片url基路径
let imgUrl

if (process.env.NODE_ENV === 'development') { // 开发环境
  baseUrl = ''
} else { // 生产环境
  baseUrl = ''
}

imgUrl = ''

export {
  baseUrl,
  imgUrl
}
