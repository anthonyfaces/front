import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../_model/menu';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private menuCambio = new Subject<Menu[]>();

  private url: string = `${environment.HOST}/oauth/token`

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(usuario: string, contrasena: string){
   
    const body = `grant_type=password&username=${encodeURIComponent(usuario)}&password=${encodeURIComponent(contrasena)}`;

    return this.http.post<any>(this.url, body, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8').set('Authorization', 'Basic ' + btoa(environment.TOKEN_AUTH_USERNAME + ':' + environment.TOKEN_AUTH_PASSWORD))
    });
  
  }

  getMenuCambio() {
    return this.menuCambio.asObservable();
  }

  setMenuCambio(menus: Menu[]) {    
    this.menuCambio.next(menus);
  }
}
