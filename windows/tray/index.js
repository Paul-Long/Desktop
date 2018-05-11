import {Tray, Menu} from 'electron';
import {iconPath} from '../config';

export default function () {
  const appIcon = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: '退出', type: 'normal' }
  ]);
  appIcon.setContextMenu(contextMenu);
  return appIcon;
}
