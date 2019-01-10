import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
>>>>>>> 884ef8482ec6a679e031e4897c0fada555c4e6c2

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
<<<<<<< HEAD
    ActivitiesComponent,
    FooterComponent
=======
    ActivitiesComponent
>>>>>>> 884ef8482ec6a679e031e4897c0fada555c4e6c2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
