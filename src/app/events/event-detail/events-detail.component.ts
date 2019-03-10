import { Component } from "@angular/core";
import { EventService } from "../sheared/event.service";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from '../sheared';
@Component({
  templateUrl: "./events-delail.component.html",
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }
      .event-image {
        height: 100px;
      }
      a{cursor:pointer;}
    `
  ]
})
export class EventDetailsComponent {
  event: IEvent;
  addMode: boolean
  constructor(
    private eventServise: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.event = this.eventServise.getEvent(+this.route.snapshot.params["id"]);
  }
  addSession(){
    this.addMode = true
  }
}
