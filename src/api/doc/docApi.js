import { _get, _post, _queryPage } from '../../utils/BaseApi'
import request from '../../utils/request'
/**
 * 关联文档到教室
 * @param {*} params 
 */
export const _bindDocApi = (params = {}) => _post({url: '/openapi/doc/bindDoc', params, token: true})

/**
 * 删除文档到教室
 * @param {*} params 
 */
//  export const _deleteDocApi = (params = {}) => _post({url: '/openapi/doc/removeDoc', params, token: true})


 export function _deleteDocApi(params) {
   return request({
     url: '/openapi/doc/removeDoc',
     method: 'post',
     data: params
   })
 }
// https://${private_domain}.at.baijiayun.com/openapi/doc/bindDoc