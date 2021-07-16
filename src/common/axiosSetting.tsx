import axios from 'axios'
import { message } from 'antd'

axios.defaults.withCredentials = true
axios.defaults.timeout = 10000

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

axios.interceptors.request.use( config => {
        // Do something before request is sent
        const token =  window.localStorage.getItem("accessToken")
        // console.log(window.location.href.indexOf('/user/login') > -1)
        // if(config.url.indexOf('/auth/oauth/token') > 0){
        //     config.headers.Authorization = 'Basic dnVlOnZ1ZQ==' // 增加客户端认证
        // }else{
        //     config.headers.Authorization = token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        // }
        config.headers.Authorization = `Bearer ${token}` // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
        const {url} = config
        // if(/^\/api\//.test(url) && !token && !window.location.href.indexOf('user') > -1){
        //     const { dispatch } = store
        //     dispatch(routerRedux.replace('/user/login')) // 跳转到登录页
        // }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)
// respone拦截器
// axios.interceptors.response.use(
//     response => {
//         /**
//          * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//          * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//          */
//         const res = response.data
//         if (response.status !== 200 && res.status !== 200) {
//             message.error(response.data.message)
//         } else {
//             return response.data
//         }
//     },
//     error => {
//         // console.log(JSON.stringify(error)) // for debug
//         if (error === undefined || error.code === 'ECONNABORTED') {
//             message.warning('服务请求超时')
//             return Promise.reject(error)
//         }
//         // const { response: { status, statusText, data: { msg = '服务器发生错误' } }} = error
//         // const { response } = error
//         // const { dispatch } = store
//         // const text = codeMessage[status] || statusText || msg

//         // if (status === 400) {
//         //     // message.warning('账户或密码错误！')
//         //     dispatch(routerRedux.push('/user/login'))
//         // }
//         // const info = response.data
//         // if (status === 401 || info.status === 40101) {
//         //     dispatch({
//         //         type: 'login/logout',
//         //     })
//         // }
//         // if (status === 403) {
//         //     dispatch(routerRedux.push('/exception/403'))
//         //     // Notification.warning({
//         //     //     title: '禁止',
//         //     //     message: info.message,
//         //     //     type: 'error',
//         //     //     duration: 2 * 1000,
//         //     // })
//         // }
//         // if (info.status === 30101) {
//         //     dispatch(routerRedux.push('/exception/500'))
//         //     // Notification.warning({
//         //     //     title: '失败',
//         //     //     message: info.message,
//         //     //     type: 'error',
//         //     //     duration: 2 * 1000,
//         //     // })
//         // }
//         // if (response.status === 504) {
//         //     dispatch(routerRedux.push('/exception/500'))
//         //     // Message({
//         //     //     message: '后端服务异常，请联系管理员！',
//         //     //     type: 'error',
//         //     //     duration: 5 * 1000,
//         //     // })
//         // }
//         // message.error(`${status}:${text}`)
//         // throw error
//         // return error
//         return Promise.reject(error)
//     }
// )