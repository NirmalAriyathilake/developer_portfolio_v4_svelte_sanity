import { writable } from 'svelte/store';

export const userTheme = writable<UserTheme>();
export const theme = writable<AppTheme>();
export const systemTheme = writable<SystemTheme>();

export const appAssetsStore = writable<Record<string, string>>({});
