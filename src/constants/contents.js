import Home from '@containers/home';
import NewTab from '@containers/newtab';

export default [
  { path: '/home', component: Home, exact: true, text: '首页' },
  { path: '/newtab', component: NewTab, exact: true, text: '新标签页' }
]
