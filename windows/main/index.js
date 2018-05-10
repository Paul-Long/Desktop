import {BrowserWindow} from 'electron';
import path from 'path';
import url from 'url';

export default function () {
  let mainWindow = new BrowserWindow({ width: 1366, height: 768, frame: false, titleBarStyle: 'hiddenInset' });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null
  });
  return mainWindow;
};
