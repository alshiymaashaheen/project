import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { eventsService } from './events/events.service';
import { EventsFormComponent } from './events/events-form/events-form.component';
import { FormsModule } from '@angular/forms';
import { EventsListComponent } from './events/events-list/events-list.component';

@NgModule({
  declarations: [
   AppComponent,
   EventsComponent,
   EventsListComponent,
   EventsFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule
    

  ],
  providers: [eventsService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
