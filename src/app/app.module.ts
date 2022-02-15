import { LoadingSpinnerComponent } from './shared/loading-spinner.component';
import { PublicationService } from './services/publication.service';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alert/alert.component';
import { AuthComponent } from './auth/auth.component';

import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { NewAccountComponent } from './new-account/new-account.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderLandingComponent } from './landing/header-landing/header-landing.component';
import { NavLandingComponent } from './landing/nav-landing/nav-landing.component';
import { ResearcherInfoPageComponent } from './researcher-info-page/researcher-info-page.component';
import { ResearcherCardComponent } from './researcher-info-page/researcher-card/researcher-card.component';
import { NavResearcherComponent } from './researcher-info-page/header-researcher/nav-researcher/nav-researcher.component';
import { ResearchPageComponent } from './research-page/research-page.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderResearcherComponent } from './researcher-info-page/header-researcher/header-researcher.component';
import { ContactFormComponent } from './researcher-info-page/contact-form/contact-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AlertComponent,
    AuthComponent,
    LandingComponent,
    NewAccountComponent,
    SubscribeComponent,
    PageNotFoundComponent,
    HeaderLandingComponent,
    NavLandingComponent,
    ResearcherInfoPageComponent,
    ResearcherCardComponent,
    NavResearcherComponent,
    ResearchPageComponent,
    LoadingSpinnerComponent,
    CarouselComponent,
    HeaderResearcherComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    PublicationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
