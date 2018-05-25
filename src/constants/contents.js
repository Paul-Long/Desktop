import Home from '@containers/home';
import NewTab from '@containers/newtab';
import Other from '@containers/other';

export default [
  { path: '/home', component: Home, exact: true, text: '首页' },
  { path: '/newtab', component: NewTab, exact: true, text: '新标签页' },
  { path: '/other', component: Other, exact: true, text: '其他' },
];
