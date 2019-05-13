/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyDRv1nPoS7ub25BDo4oCADOVo-6_PgkY8M',
    authDomain: 'easypass-io.firebaseapp.com',
    databaseURL: 'https://easypass-io.firebaseio.com',
    projectId: 'easypass-io',
    storageBucket: 'easypass-io.appspot.com',
    messagingSenderId: '633848685496',
    appId: '1:633848685496:web:2ce31dfd52f9b6d1'
  }
};
