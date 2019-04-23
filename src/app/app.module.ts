import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCreateKittenComponent } from './app-create-kitten/app-create-kitten.component';
import { AppListKittenComponent } from './app-list-kitten/app-list-kitten.component';
import { AppUserKittenComponent } from './app-user-kitten/app-user-kitten.component';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.route'

@NgModule({
  declarations: [
    AppComponent,
    AppCreateKittenComponent,
    AppListKittenComponent,
    AppUserKittenComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
