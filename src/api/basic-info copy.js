import { _get, _post, _queryPage } from "@/utils/BaseApi";
import Enums from "@/utils/Enums";

/**
 * 查询用户列表（分页）
 * @param {*} params
 * @param {*} page
 */
export const _queryUserPage = (params = {}) =>
  _queryPage({
    url: "base-extra/basePersonnel/list",
    params: {
      page: params.page,
      limit: params.limit,
      personnelName: params.personnelName,
      stationId: params.stationId,
      officeId: params.officeId ? params.officeId : "",
      keyword: params.keyword ? params.keyword : ""
    },
    token: true
  });

/**
 * 查询单个用户
 * @param {*} personnelId
 */
export const _queryUser = id =>
  _get({
    url: "/base-extra/basePersonnel/info",
    params: { personnelId: id },
    token: true
  });

/**
 * 保存用户
 * @param {*} params
 */
export const _saveUser = (params = {}) =>
  _post({ url: "/base-extra/basePersonnel/add", params, token: true });

/**
 * 更新用户
 * @param {*} params
 */
export const _updateUser = (params = {}) =>
  _post({ url: "/base-extra/basePersonnel/update", params, token: true });

/**
 * 删除用户
 * @param {*} params
 */
export const _deleteUser = id =>
  _post({
    url: "/base-extra/basePersonnel/remove",
    params: { personnelId: id },
    token: true
  });

/**
 * 员工基础信息所有列表
 */
export const _queryAllUserSelect = () =>
  _get({ url: "/base-extra/basePersonnel/all", token: true });

/**
 * 获取用户角色
 * @param {*} userId
 */
export const _queryUserRoles = userId =>
  _get({ url: "/base/user/roles", params: { userId: userId }, token: true });

/**
 * 分配用户角色
 * @param {*} params
 */
export const _saveUserRoles = (params = {}) =>
  _post({
    url: "/base/user/roles/add",
    params: { userId: params.userId, roleIds: params.grantRoles.join(",") },
    token: true
  });

/**
 * 获取校园管控点所有信息
 */
export const _queryCampusControlPointAll = () =>
  _get({ url: "/base-extra/baseMonitorPoint/all", token: true });

/**
 * 获取二维码制作(分页)
 * @param {*} params
 */
export const _queryQrCodePage = (params = {}) =>
  _queryPage({ url: "/base-extra/baseQrCode/list", params, token: true });

/**
 * 新增二维码制作
 * @param {*} params
 */
export const _saveQrCode = (params = {}) =>
  _post({ url: "/base-extra/baseQrCode/add", params, token: true });

/**
 * 获取二维码制作详情
 * @param {*} userId
 */
export const _queryQrCodeDetail = qrCodeId =>
  _get({
    url: "/base-extra/baseQrCode/info",
    params: { qrCodeId: qrCodeId },
    token: true
  });

/**
 * 更新二维码制作
 * @param {*} params
 */
export const _updateQrCode = (params = {}) =>
  _post({ url: "/base-extra/baseQrCode/update", params, token: true });

/**
 * 删除二维码制作
 * @param {*} qrCodeId
 */
export const _deleteQrCode = qrCodeId =>
  _post({
    url: "/base-extra/baseQrCode/remove",
    params: { qrCodeId: qrCodeId },
    token: true
  });
