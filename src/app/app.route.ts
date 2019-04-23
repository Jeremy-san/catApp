import { Routes } from '@angular/router';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';

const ROUTES: Routes = [
  { path: 'createKitten', component: AppCreateKittenComponent },
  { path: 'listKitten', component: AppListKittenComponent },
  { path: 'userKitten', component: AppUserKittenComponent },
  { path: '', component: AppCreateKittenComponent}
];

export { ROUTES };