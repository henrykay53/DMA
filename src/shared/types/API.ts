import { HttpMethod } from './HttpVerbs';
import env from '../utils/validateEnv';
import { User } from './User';

async function api(input: RequestInfo, http: HttpMethod, data?: any) {
  let init: RequestInit = getHttpHeader(http, data);
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    // throw Error('Request failed with status: ' + response.status + ' message: ' + errorMessage);
    throw Error(errorBody.message);
  }
}
function getHttpHeader(http: HttpMethod, data: any) {
  let init: RequestInit = { method: 'GET', credentials: 'include' };
  switch (http) {
    case HttpMethod.POST:
      init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      };
      break;
    case HttpMethod.PATCH:
      init = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      };
      break;
    case HttpMethod.PUT:
      init = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      };
      break;
    case HttpMethod.DELETE:
      init = { method: 'DELETE', credentials: 'include' };
      break;
    case HttpMethod.GET:
      init = { method: 'GET', credentials: 'include' };
      break;
    default:
      init = { method: 'GET', credentials: 'include' };
      break;
  }
  return init;
}
export async function loginWithGoogle(): Promise<User> {
  const response = await api(`${env.REACT_APP_SERVER_URL}/api/auth/google`, HttpMethod.GET);
  return response.json();
}

export async function getUser(): Promise<User> {
  const response = await api(`${env.REACT_APP_SERVER_URL}/api/users`, HttpMethod.GET);
  return response.json();
}
