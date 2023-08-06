import { writable } from 'svelte/store';

export const pomodoroTimeToGo = writable(0);
export const pomodoroStatus = writable('pending');

export const timesheetEllapsedTime = writable(0);
