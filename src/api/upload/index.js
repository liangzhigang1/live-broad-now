import { _get, _post, _queryPage } from '../../utils/BaseApi'
import Enums from '../../utils/Enums'
/**
 * 获取用户列表
 * @param {*} params 
 */
export const _uploadFileApi = (params) => _post({url: 'https://wkapi.shejizhizi.com/?service=App.Common_Upload.Go', params, contentType: Enums.ContentType.MULTIPART_FORM, token: true})

// import request from "@/utils/request";

// export function _uploadFileApi(data) {
//   return request({
//     url: "https://wkapi.shejizhizi.com/?s=App.Common_Upload.Go",
//     method: 'POST',
// 		data: data,
//     headers: {
// 			'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarynl6gT1BKdPWIejNq'
// 		}
//   });
// }