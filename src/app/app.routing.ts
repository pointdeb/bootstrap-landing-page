import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

export const AppRoutes: Routes = [
  { path: '', loadChildren: './sample/sample.module#SampleModule' },
  { path: '**', component: NotFoundComponent }
];
