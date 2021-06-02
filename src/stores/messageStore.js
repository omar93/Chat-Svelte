import { writable } from 'svelte/store'
export const messageStore = writable([
    {'name': 'omar', 'message': 'hej från omar'},
    {'name': 'ali', 'message': 'hej från ali'}
])