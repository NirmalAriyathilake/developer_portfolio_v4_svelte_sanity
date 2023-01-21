import { writable } from 'svelte/store';

export const theme = writable<AppTheme>('system');

export const appAssetsStore = writable<Record<string, string>>({});
