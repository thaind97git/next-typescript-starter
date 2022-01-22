import { isServer } from '@/utils';

const TOKEN_NAME = '_ut.lw';
export const saveToken = (token: string): void | null =>
  !isServer && token ? localStorage.setItem(TOKEN_NAME, token) : null;
export const getToken = (): string | null =>
  !isServer ? localStorage.getItem(TOKEN_NAME) : null;
export const removeToken = (): void | null =>
  !isServer ? localStorage.removeItem(TOKEN_NAME) : null;
