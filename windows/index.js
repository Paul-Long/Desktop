import { app, BrowserWindow, ipcMain } from 'electron';
import createMainWindow from './main';
import createLoginWin from './login';
import createTray from './tray';
import { loginChannels, mainChannels } from './config';

let mainWin, loginWin, appIcon;
app.on('ready', () => {
  appIcon = createTray();
  mainWin = createMainWindow();
  mainWin.hide();
  loginWin = createLoginWin();

  loginChannels.forEach(channel => {
    ipcMain.on(`login-${channel}`, () => {
      if (channel === 'logged') {
        loginWin.hide();
        mainWin.show();
      } else if (channel === 'close') {
        mainWin.close();
        loginWin.close();
      }
    });
  });

  mainChannels.forEach(channel => {
    ipcMain.on(`main-${channel}`, () => {
      if (channel === 'close') {
        mainWin.hide();
        loginWin.show();
      } else {
        mainWin[channel]();
      }
    })
  });

  BrowserWindow.addDevToolsExtension('C:\\Users\\baolong.hou\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\lmhkpmbekcpmknklioeibfkpmmfibljd\\2.15.2_0');
  BrowserWindow.addDevToolsExtension('C:\\Users\\baolong.hou\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.2.1_0');
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    appIcon.destroy();
    app.quit();
  }
});

app.on('activate', function () {
  if (loginWin === null) {
    loginWin = createLoginWin()
  }
  if (mainWin === null) {
    mainWin = createMainWindow();
  }
});
