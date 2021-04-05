import { _get, _post, _queryPage } from '../../utils/BaseApi'

/**
 * 获取用户列表
 * @param {*} params 
 */
export const _getUserListApi = (params = {}) => _post({url: '/openapi/user/getUserList', params, token: true})

/**
 * 获取教室关联的学员列表
 * @param {*} params 
 */
 export const _getClassStudentListApi = (params = {}) => _post({url: '/openapi/user/getClassStudent', params, token: true})

 /**
 * 给教室批量关联学员
 * @param {*} params 
 */
  export const _classBindStudentBatchApi = (params = {}) => _post({url: '/openapi/user/classBindStudentBatch', params, token: true})