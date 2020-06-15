import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';

import { ModalComponent } from './about/modal/modal.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    ModalComponent,
    BlogsComponent,
    ContactMeComponent,
    FooterComponent,
    NavbarComponent,

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
