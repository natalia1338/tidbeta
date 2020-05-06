import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private httpService: HttpClient) { }

  logindata:any ={};

  ngOnInit() {
  }

  data= { email:" jeffsonvitor69@gmail.com", senha : "1234"};

  postJSON(){

     this.httpService.post( 'http://66170537b2fe.sn.mynetname.net:8010/auth/autentica', this.data). subscribe(
      data=>{

         console.log(data);
       },

      (err: HttpErrorResponse)=> {

        console.log(err.message);

       }

     );
  }

  //Login(){
    //console.log("Email:",this.logindata.Email);
    //console.log("Senha:",this.logindata.Senha);
//}



}
