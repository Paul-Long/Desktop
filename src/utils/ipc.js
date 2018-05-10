import { ipcRenderer } from 'electron';

type Option = {
  prefix: string
};

function Ipc(opts: Option) {
  const {
    prefix
  } = opts;

  function send(channel: string) {
    ipcRenderer.send(`${prefix}-${channel}`);
  }

  return {
    send
  }
}

export default Ipc;
