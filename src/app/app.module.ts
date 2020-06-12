import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

import { ModalComponent } from './about/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ModalComponent,

  ],
  imports: [
    FontAwesomeModule,
    // NgbModule.forRoot(),
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalComponent]
})
export class AppModule { }
