import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  lc= localStorage;

  constructor(private router:Router){

  }
  // LoginHandler(){
  //   this.router.navigate(['loggedin'])
  // }
  LogoutHandler(){
    localStorage.setItem('status','notloggedin')
  }


}
