import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  uname:string=''
  passwd:string=''

  ngOnInit(): void{}
  loginSubmit(){

    if (this.uname=== 'rit' && this.passwd=== 'rit@123')
      localStorage.setItem('status','loggedin')

    else
    localStorage.setItem('status','notloggedin')

  }
}
