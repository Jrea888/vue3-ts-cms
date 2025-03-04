let BASE_URL = ''
const TIME_OUT = 10000

// 判断不同环境下的请求地址，根据环境变量来设置
if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://123.207.32.32:5000'
} else if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://coderwhy.org/prod'
} else {
    BASE_URL = 'http://coderwhy.org/test'
}

export {BASE_URL, TIME_OUT}
