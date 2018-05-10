import { app, ipcMain, BrowserWindow } from 'electron';
import createMainWindow from './main/index';
import createLoginWin from './login/index';
import { mainChannels, loginChannels } from './config';

let mainWin, loginWin;
app.on('ready', () => {
  mainWin = createMainWindow();
  mainWin.hide();
  loginWin = createLoginWin();

  loginChannels.forEach(channel => {
    ipcMain.on(`login-${channel}`, () => {
      if (channel === 'logged') {
        loginWin.hide();
        mainWin.show();
        mainWin.reload();
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
    app.quit()
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
