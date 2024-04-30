import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
	// eslint-disable-next-line no-console
	console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);

window.electronAPI.onButtonUpdate((value) => {
	// if (value === "ready") {
	// 	document.querySelectorAll("#P1, #P2, #P3").forEach((el) => {
	// 		el.style.backgroundColor = "white";
	// 	});
	// 	document.querySelector("#rawValue").innerHTML = "Ready";
	// } else if (["P1", "P2", "P3"].includes(value)) {
	// 	const el = document.querySelector(`#${value}`);
	// 	el.style.backgroundColor = el.dataset.background;
	// 	document.querySelector("#rawValue").innerHTML = "Not Ready";
	// }

	console.log(value);
});
