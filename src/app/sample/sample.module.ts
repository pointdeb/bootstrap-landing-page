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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SampleRoutes)
  ],
  declarations: [HomeComponent, CoverComponent, AboutComponent, ContactComponent, PortfolioComponent]
})
export class SampleModule { }
