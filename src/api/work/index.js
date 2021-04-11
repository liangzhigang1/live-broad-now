import { _get, _post, _queryPage } from '../../utils/BaseApi'
/**
 * 发布作业
 * @param {*} params 
 */
export const _putWorkApi = (params) => _post({url: 'https://wkapi.shejizhizi.com/?s=Web.Common_Room.PublishWork', params, token: true})
/**
 * 提交作业
 * @param {*} params 
 */
 export const _submitWorkApi = (params) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Room.SubmitWork', params, token: true})

/**
 * 查看发布、作业
 * @param {*} params 
 */
 export const _queryPushWorkListApi = (params) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Room.PushWorkList', params, token: true})

 /**
 * 作业图片列表
 * @param {*} params 
 */
  export const _queryWorkListApi = (params) => _post({url: 'https://wkapi.shejizhizi.com/?s=App.Common_Room.WorkList', params, token: true})

