import { BrowserWindow } from 'electron';
import path from 'path';
import url from 'url';
import { iconPath } from '../config';

export default function () {
  let mainWindow = new BrowserWindow({
    width: 1366,
    height: 768,
    frame: false,
    titleBarStyle: 'hiddenInset',
    transparent: true,
    icon: iconPath,
  });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  return mainWindow;
}
