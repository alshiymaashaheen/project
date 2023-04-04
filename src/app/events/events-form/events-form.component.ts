import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { events } from '../events.model';
import { eventsService } from '../events.Service';


@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.css']
    })
   export class EventsFormComponent {
   events!:events;
  evenstService: any;
   constructor(private eventsService:eventsService,private router:Router,private route:ActivatedRoute){
    route.params.subscribe((params:Params)=>{
      const id=+params['id']
      this.events=eventsService.getevents(id)

   })
   }
    
   onSubmit(form:NgForm){
    if (this.events==null){
      const events=new events(this.evenstService.data.length,form.value.id,"",form.value.EventName,form.value.Date,form.value.Time,form.value.Event_type,form.value.Event_description,form.value.Event_Attendees,form.value.Event_host,form.value.Event_sponsonrs,form.value.Media_coverage,form.value.CandidataId)
      this.eventsService.addevents(events)

    }
    else{

    const events=new events(this.events,form.value.id,"",form.value.EventName,form.value.Date,form.value.Time,form.value.Event_type,form.value.Event_description,form.value.Event_Attendees,form.value.Event_host,form.value.Event_sponsonrs,form.value.Media_coverage,form.value.CandidataId)
    this.eventsService.updateevents(events)
   }
   this.router.navigate(["events"])
   }
 }
