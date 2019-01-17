import { BrowserModule, } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';

import { BrowserTransferStateModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';



import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { VideoComponent } from './home/presentation/video/video.component';
import { PresentationComponent } from './home/presentation/presentation.component';
import { SliderComponent } from './home/presentation/slider/slider.component';
import { ClientComponent } from './home/client/client.component';
import { SliderClientsComponent } from './home/client/slider-clients/slider-clients.component';
import { SolutionsComponent } from './home/solutions/solutions.component';
import { FeaturesComponent } from './home/features/features.component';
import { TrustComponent } from './home/trust/trust.component';
import { TestimoniesSliderComponent } from './home/trust/testimonies-slider/testimonies-slider.component';
import { ContactComponent } from './home/contact/contact.component';
import { AwardsComponent } from './home/awards/awards.component';
import { PresentationService } from './shared/services/presentation.service';
import { HomeService } from './shared/services/home.service';
import { SharedModule } from './shared/modules/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    VideoComponent,
    PresentationComponent,
    SliderComponent,
    ClientComponent,
    SliderClientsComponent,
    SolutionsComponent,
    FeaturesComponent,
    TrustComponent,
    TestimoniesSliderComponent,
    ContactComponent,
    AwardsComponent,

  ],
  imports: [
    SharedModule,
    HttpModule,
    BrowserAnimationsModule,
    ParticlesModule,
    HttpClientModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({appId: 'eidWeb'}),
    AppRoutingModule
  ],
  providers: [
    PresentationService,
    HomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
