import { ElectronHandler, LikeMyCoffeeHandler } from '../main/preload';
declare module '*.mp3';

declare global {
	// eslint-disable-next-line no-unused-vars
	interface Window {
		electron: ElectronHandler;
		electronAPI: LikeMyCoffeeHandler;
	}
}

export {};
