import { get, post } from '/@/utils/http/axios';

const URL = {
  list: '/api/feedback/list',
  create: '/api/feedback/create',
  delete: '/api/feedback/delete',
};

const listApi = async (params) => get({ url: URL.list, params: params, data: {}, headers: {} });
const createApi = async (data) =>
  post({
    url: URL.create,
    params: {},
    data: data,
    headers: { 'Content-Type': 'multipart/form-data;charset=utf-8' },
  });

const deleteApi = async (params) => post({ url: URL.delete, params: params, headers: {} });

export { listApi, createApi, deleteApi };
