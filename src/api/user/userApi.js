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
 export const _getClassStudentListApi = (params = {}) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Live.RoomUserList', params, token: true})

 /**
 * 给教室批量关联学员
 * @param {*} params 
 */
export const _classBindStudentBatchApi = (params = {}) => _post({url: '/openapi/user/classBindStudentBatch', params, token: true})

 /**
 * 添加用户到百家云
 * @param {*} params 
 */
export const _sysUserAddBaiJiaApi = (params = {}) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Live.AddUser', params, token: true})

 /**
 * 教室绑定学生
 * @param {*} params 
 */
  export const _classBindStudentApi = (params = {}) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Live.BindStudent', params, token: true})

  