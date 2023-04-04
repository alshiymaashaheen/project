import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { EventsListComponent } from "./events/events-list/events-list.component";
import { EventsFormComponent } from "./events/events-form/events-form.component";

const appRoutes:Routes=[
     {path:"events",component:EventsComponent,children:[
     {path:'',component:EventsListComponent,pathMatch:'full'},
     {path:'new',component:EventsFormComponent},
     {path:'edit/:id',component:EventsFormComponent},
    ]},
] 
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}