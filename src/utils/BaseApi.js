import FlyRequest from './FlyRequest'
import Enums from './Enums'
import Qs from 'qs'
// import config from '@/config'
import { getToken } from './auth'
import { MessageBox, Message } from 'element-ui'
const auth = BJY.auth;


// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
const baseUrl = 'https://e83228320.at.baijiayun.com'
/**
 * HTTP请求对象
 */
const flyRequest = new FlyRequest({
  baseURL: 'https://e83228320.at.baijiayun.com'
})

/**
 * 注册请求拦截器
 */
flyRequest.registerRequestInterceptor(request => {
  // 根据_mock参数，从环境变量中获取BASE_API或MOCK_BASE_API
  request.baseURL = request._mock ? process.env.MOCK_BASE_API : baseUrl
  request.headers['token'] = auth.isTeacher() ? '0449B310BD9B45B6DACA579542B9A1E6X24' : 'C71895EE5D3C9FF351552743C83445C1X31'
  // const token = getToken()
  console.warn('####### API Request: ', request)
  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

/**
 * 注册响应拦截器
 */
flyRequest.registerResponseInterceptor(
  response => {
    const res = response.data
    // 如果自定义代码不是0，则判断为错误。
    if (res.code !== 0) {
      Message({
        message: res.msg || 'error',
        type: 'error',
        duration: 5 * 1000
      })
      return res
    } else {
      return res
    }
  },
  error => {
    // 请求失败调用
    console.log('313132', error);
    if (error && error.message) {
      // 请求错误提示
      Message({
        message: error.message,
        type: "error",
        showClose: true,
        duration: 1000 * 1.5 * 3
      });
    }
    return error;
  }
)

/**
 * ajax请求
 * @param {*}
 */
export function _request ({
  url,
  params = {},
  method = flyRequest.METHODS.POST,
  token = false,
  mock = false,
  contentType = Enums.ContentType.JSON_UTF8,
  headers = {}
} = {}) {
  headers['Content-Type'] = contentType
  return flyRequest[method](url, contentType == Enums.ContentType.FORM_UTF8 ? Qs.stringify(params) : params, {
    method: method,
    _token: token,
    _mock: mock,
    headers
  })
}

/**
 * GET请求
 * @param {*}
 */
export function _get ({
  url,
  params = {},
  method = flyRequest.METHODS.GET,
  token = false,
  mock = false,
  contentType = Enums.ContentType.JSON_UTF8,
  headers = {}
} = {}) {
  return _request({url, params, method, token, mock, contentType, headers})
}

/**
 * POST请求
 * @param {*}
 */
export function _post ({
  url,
  params = {},
  method = flyRequest.METHODS.POST,
  token = false,
  mock = false,
  contentType = Enums.ContentType.FORM_UTF8,
  headers = {}
} = {}) {
  return _request({url, params, method, token, mock, contentType, headers})
}

/**
 * 分页查询
 * @param {*}
 */
export function _queryPage ({
  url,
  params = {},
  method = flyRequest.METHODS.GET,
  token = false,
  mock = false,
  contentType = Enums.ContentType.JSON_UTF8
} = {}) {
  return _post({
    url,
    params,
    method,
    token,
    mock,
    contentType,
  })
}

/**
 * 流式分页查询
 * @param {*}
 */
export function _queryFlowPage ({
  url,
  params = {},
  method = flyRequest.METHODS.POST,
  token = false,
  mock = false,
  contentType = Enums.ContentType.JSON_UTF8
} = {}) {
  return _post({
    url,
    params,
    method,
    token,
    mock,
    contentType,
  })
}