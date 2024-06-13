import { GetAuthUser } from '../hooks/UserContextHook';

export const notLoggedIn = (): boolean => GetAuthUser() === null;
export const isLoggedIn = (): boolean => notLoggedIn() !== null;
