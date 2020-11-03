import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Crear  nuevo usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBXkgl1P_YEwuk2v-gr6xIb7veOp6WTGT4';

  constructor( private http: HttpClient ) { }

  logout(){

  }

  login( usuario: UsuarioModel ){

  }

  nuevoUsuario( usuario: UsuarioModel ){

  }
}
