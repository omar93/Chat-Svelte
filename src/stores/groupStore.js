import { writable } from 'svelte/store'
export const groupStore = writable([
    {'groupName': 'swagurts', 'inviteID':'abc123'},
    {'groupName': 'fiskarna', 'inviteID':'xyz789'}
])