import { ResearchPageComponent } from './research-page/research-page.component';
import { PublicationResolverService } from './services/publication-resolver.service';
import { PublicationService } from './services/publication.service';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResearcherInfoPageComponent } from './researcher-info-page/researcher-info-page.component';
import { Resolve } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'research',
    component: ResearchPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'professor',
    component: ResearcherInfoPageComponent,
    resolve: [PublicationResolverService],
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
