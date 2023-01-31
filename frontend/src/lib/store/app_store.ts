import { writable } from 'svelte/store';

export const theme = writable<AppTheme>();

export const appAssetsStore = writable<Record<string, string>>({});
