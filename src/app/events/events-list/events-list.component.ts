import { R3DeclareNgModuleMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { events } from '../events.model';
import { eventsService } from '../events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent {
  data:events[];
  constructor(private eventsService:eventsService,){
    this.data=eventsService.getall()
   
}
onDelete(id:number){
  this.eventsService.deleteevents(id);
  eventsService.dataChange.subscribe((value)=>{
  this.data=value;
  })
}
}
