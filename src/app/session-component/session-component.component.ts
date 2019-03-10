import { Component, OnInit, Input } from '@angular/core';
import {ISession} from '../events/sheared/index';

@Component({
  selector: 'app-session-component',
  templateUrl: './session-component.component.html',
  styleUrls: ['./session-component.component.css']
})
export class SessionComponentComponent implements OnInit {
  @Input() sessions:ISession[]
  constructor() { }

  ngOnInit() {

  }

}
