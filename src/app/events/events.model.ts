export class events{
    constructor(public id:number,
        public EventName:string,
        public Date:Date,
        public Time:Date,
        public Event_type:string,
        public Event_description:string,
         public Event_Attendees:number,
         public Event_host:string,
         public Event_sponsonrs:string,
         public Media_coverage:string,
         public CandidataId:number){}
}