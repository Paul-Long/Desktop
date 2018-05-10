const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1366, height: 768, frame: false, titleBarStyle: 'hiddenInset' });
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null
  });
  BrowserWindow.addDevToolsExtension('C:\\Users\\baolong.hou\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.15.2_0');
  BrowserWindow.addDevToolsExtension('C:\\Users\\baolong.hou\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.1_0');
  const { ipcMain } = require('electron');
  ipcMain.on('asynchronous-close', (event, arg) => {
    mainWindow.close();
  });
  ipcMain.on('asynchronous-unmaximize', (event, arg) => {
    mainWindow.unmaximize();
  });
  ipcMain.on('asynchronous-maximize', (event, arg) => {
    mainWindow.maximize();
  });
  ipcMain.on('asynchronous-minimize', (event, arg) => {
    mainWindow.minimize();
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});
