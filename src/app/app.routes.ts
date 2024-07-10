import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ContentsComponent} from './contents/contents.component';

export const MFE2_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'contents',
    pathMatch: 'full'
  },
  {
    path: 'contents',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule),
  }
];
