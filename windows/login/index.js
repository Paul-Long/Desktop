import { BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';

export default function () {
  let loginWindow = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    titleBarStyle: 'hiddenInset',
    transparent: true
  });
  loginWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  loginWindow.webContents.openDevTools();
  loginWindow.on('closed', function () {
    loginWindow = null
  });
  return loginWindow;
};
