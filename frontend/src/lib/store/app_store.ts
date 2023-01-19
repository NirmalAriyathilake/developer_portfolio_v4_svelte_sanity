import { writable } from 'svelte/store';

export const theme = writable('light');

export const appAssetsStore = writable<Record<string, string>>({});
