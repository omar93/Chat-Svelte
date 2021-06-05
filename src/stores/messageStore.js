import { writable } from 'svelte/store'
export const messageStore = writable([])
/*
export const messageStore = writable([
    {'name': 'omar', 'message': 'hej från omar', 'isFromMe': true},
    {'name': 'ali', 'message': 'hej från ali', 'isFromMe': false}
])
*/