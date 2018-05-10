import { ipcRenderer } from 'electron';

function Ipc() {
  function close() {
    ipcRenderer.send('asynchronous-close');
  }
  
  function minimize() {
    ipcRenderer.send('asynchronous-minimize');
  }

  function unMaximize() {
    ipcRenderer.send('asynchronous-unmaximize');
  }

  function maximize() {
    ipcRenderer.send('asynchronous-maximize');
  }

  return {
    close,
    unMaximize,
    maximize,
    minimize
  }
}

export default Ipc;
