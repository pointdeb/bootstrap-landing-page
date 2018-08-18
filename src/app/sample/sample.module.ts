import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CoverComponent } from './cards/cover/cover.component';
import { RouterModule } from '@angular/router';
import { SampleRoutes } from './sample.routing';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServiceComponent } from './cards/service/service.component';
import { SubscribeComponent } from './forms/subscribe/subscribe.component';
import { DiscoverComponent } from './cards/discover/discover.component';
import { AboutCardComponent } from './cards/about-card/about-card.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { FeatureComponent } from './cards/feature/feature.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SampleRoutes)
  ],
  declarations: [HomeComponent, CoverComponent, AboutComponent, ContactComponent, PortfolioComponent, ServiceComponent, SubscribeComponent, DiscoverComponent, AboutCardComponent, ContactFormComponent, FeatureComponent]
})
export class SampleModule { }
