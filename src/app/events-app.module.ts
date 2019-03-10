import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EventsAppComponent } from "./app.component";
import { NavAppComponent } from "./nav/nav-app.component";
import { ToasterService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./error/404.component";
import { EventRouteActivator } from "./events/event-detail/event-route-activator.service";

import {
  EventListResolver,
  CreateEventComponent,
  EventsThumbnailComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventService,

} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SessionComponentComponent } from './session-component/session-component.component';
import { CreateSesionComponent } from './create-sesion/create-sesion.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)],
  providers: [
    EventService,
    ToasterService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtystate
    }
  ],
  bootstrap: [EventsAppComponent],

  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavAppComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    SessionComponentComponent,
    CreateSesionComponent

  ]
})
export class AppModule { }

export function checkDirtystate(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You did not savad this event, do you want really to cancel?")
  return true;
}
