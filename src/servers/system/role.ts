import type { FormData } from '#/form';
import type { PageServerResult, PaginationData } from '#/public';
import { request } from '@/utils/request';

enum API {
  URL = '/system/role'
}

/**
 * 获取分页数据
 * @param data - 请求数据
 */
export function getSystemRolePage(data: Partial<FormData> & PaginationData) {
  return request.get<PageServerResult<FormData[]>>(
    `${API.URL}/page`,
    { params: data }
  );
}

/**
 * 根据ID获取数据
 * @param id - ID
 */
export function getSystemRoleById(id: string) {
  return request.get<FormData>(`${API.URL}/detail?id=${id}`);
}

/**
 * 新增数据
 * @param data - 请求数据
 */
export function createSystemRole(data: FormData) {
  return request.post(API.URL, data);
}

/**
 * 修改数据
 * @param id - 修改id值
 * @param data - 请求数据
 */
export function updateSystemRole(id: string, data: FormData) {
  return request.put(`${API.URL}/${id}`, data);
}

/**
 * 删除
 * @param id - 删除id值
 */
export function deleteSystemRole(id: string) {
  return request.delete(`${API.URL}/${id}`);
}
