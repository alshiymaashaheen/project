import { Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { events } from "./events.model";

export class eventsService{
    
      data:events[]=[]
      dataChange=new Subject<events[]>()
       constructor(){
        this.data=[new events(0,"a",8,20,"s","s","s",2,"2","E","e",),new events( 0,"a",2,2,"s","s","s",2,"2","E","e",),]
       }
     

  getAll():events[]{
      return this.data.slice();
    }

  getevents(id:number){
        return <events>this.data.find((r)=>{
          return r.id==id;
        });
      }

  deleteevents(id:number){
        this.data.splice(this.data.indexOf(this.getevents(id)),1)
        this.dataChange.next(this.getAll())
      }

  addevents(newevent:events){
        this.data.push(newevent)
        
    }
 updateevents(updated:events){
        this.data[this.data.indexOf(this.getevents(updated.id))]=updated;
       

    }
}
