/* eslint-disable @typescript-eslint/no-explicit-any */

import { HTTP_METHODS } from '../enum/common';

interface IGenericData {
  [key: string]: any;
}

export const httpMethods = {
  /**
   * Create a GET request object
   * @param {string} url The URL to fetch
   * @param {IGenericData} [params] Optional parameters to include in the request
   * @returns {{ url: string, params?: IGenericData, method: HTTP_METHODS.GET }}
   */
  get: (url: string, params?: IGenericData): { url: string, params?: IGenericData, method: HTTP_METHODS.GET } => ({
    url,
    params,
    method: HTTP_METHODS.GET,
  }),

  /**
   * Create a POST request object
   * @param {string} url The URL to fetch
   * @param {IGenericData} body The body of the request
   * @returns {{ url: string, body: IGenericData, method: HTTP_METHODS.POST }}
   */
  post: (url: string, body: IGenericData): { url: string, body: IGenericData, method: HTTP_METHODS.POST } => ({
    url,
    body,
    method: HTTP_METHODS.POST,
  }),
  
  /**
   * Create a PUT request object
   * @param {string} url The URL to fetch
   * @param {IGenericData} body The body of the request
   * @returns {{ url: string, body: IGenericData, method: HTTP_METHODS.PUT }}
   */
  put: (url: string, body: IGenericData): { url: string, body: IGenericData, method: HTTP_METHODS.PUT } => ({
    url,
    body,
    method: HTTP_METHODS.PUT,
  }),
  
  /**
   * Create a PATCH request object
   * @param {string} url The URL to fetch
   * @param {IGenericData} body The body of the request
   * @returns {{ url: string, body: IGenericData, method: HTTP_METHODS.PATCH }}
   */
  patch: (url: string, body: IGenericData): { url: string, body: IGenericData, method: HTTP_METHODS.PATCH } => ({
    url,
    body,
    method: HTTP_METHODS.PATCH,
  }),
  
  /**
   * Create a DELETE request object
   * @param {string} url The URL to fetch
   * @param {IGenericData} params parameters to include in the request
   * @returns {{ url: string, params: IGenericData, method: HTTP_METHODS.DELETE }}
   */
  delete: (url: string, params: IGenericData): { url: string, params: IGenericData, method: HTTP_METHODS.DELETE } => ({
    url,
    params,
    method: HTTP_METHODS.DELETE,
  }),
};
