import { Routes } from '@angular/router'
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-detail/event-route-activator.service';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver

} from "./events/index";
import { CreateSesionComponent } from './create-sesion/create-sesion.component';

export const appRoutes = [
  {path: "events/create-session",component : CreateSesionComponent},
  { path: "events/new", component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: "events", component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: "404", component: Error404Component },
  { path: "events/:id", component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: 'user', loadChildren: './user/user.module#UserModule' }

];

