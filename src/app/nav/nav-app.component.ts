import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-app',
  templateUrl: `./nav-app.component.html`,
  styles: [`
    .nav.navbar nav {font-size:15px;}
    #searchForm {margin-right:100px;}
    @media (max-width:1200px){#searchForm{duisplay:none;}}
    li>a.active{color:#f97924;}
 ` ]
})
export class NavAppComponent {
  constructor(public auth: AuthService) {

  }

}
