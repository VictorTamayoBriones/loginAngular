import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioModel } from '../../models/usuario.model';

//import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService ) { }

  ngOnInit() {
  }


  login(form: NgForm){

    if( form.invalid ){ return; }
  /*  
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
*/
    this.auth.login( this.usuario )
      .subscribe( resp => {
        console.log(resp);

        if( this.recordarme ){
          localStorage.setItem('email', this.usuario.email);
        }

      }, (err) =>{
        console.log(err.error.error.message);
      });
  }

}
