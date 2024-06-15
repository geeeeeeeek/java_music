// 权限问题后期增加
import { get, post } from '/@/utils/http/axios';
// import axios from 'axios';
const URL = {
  login: '/api/user/login',
  userList: '/api/user/list',
  detail: '/api/user/detail',
  create: '/api/user/create',
  update: '/api/user/update',
  delete: '/api/user/delete',
  userLogin: '/api/user/userLogin',
  userRegister: '/api/user/userRegister',
  updateUserPwd: '/api/user/updatePwd',
  updateUserInfo: '/api/user/updateUserInfo',
};

const loginApi = async (data) => post({ url: URL.login, data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const listApi = async (params) => get({ url: URL.userList, params: params, data: {}, headers: {} });
const detailApi = async (params) => get({ url: URL.detail, params: params, data: {}, headers: {} });
const createApi = async (data) =>
  post({ url: URL.create, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const updateApi = async (data) => post({ url: URL.update, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const deleteApi = async (params) => post({ url: URL.delete, params: params, headers: {} });
const userLoginApi = async (data) => post({ url: URL.userLogin, data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const userRegisterApi = async (data) =>
  post({ url: URL.userRegister, params: {}, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });
const updateUserPwdApi = async (params) => post({ url: URL.updateUserPwd, params: params });
const updateUserInfoApi = async (data) =>
  post({ url: URL.updateUserInfo, data: data, headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' } });

export {
  loginApi,
  listApi,
  detailApi,
  createApi,
  updateApi,
  deleteApi,
  userLoginApi,
  userRegisterApi,
  updateUserPwdApi,
  updateUserInfoApi,
};
