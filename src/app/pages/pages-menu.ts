import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-grid-a-outline',
    link: '/pages/dashboard',
    home: true,
  },
 {
   title: 'Mantenimientos',
   group: true,
 },
  {
   title: 'Residenciales',
   link: '/pages/areas',
   icon: 'nb-home',
  },
  {
   title: 'Usuarios',
   link: '/pages/users',
   icon: 'nb-person',
  }];
//     {
//       title: 'Login',
//       link: '/login',
//     },
//     {
//       title: 'Register',
//       link: '/register',
//     },
//     {
//       title: 'Request Password',
//       link: '/request-password',
//     },
//     {
//       title: 'Reset Password',
//       link: '/reset-password',
//     },
//   ],
// },
