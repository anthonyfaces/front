import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Paciente } from '../_model/paciente';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})

/* ANTES DEL GENERIC SERVICE
export class PacienteService {
  
  // Subject es una clase de RxJs para indicar que vas a tener
  // una entidad que otras se van a suscribir a esa entidad
  private pacienteCambio = new Subject<Paciente[]>();

  // Variable reactiva
  private mensajeCambio = new Subject<string>();

  url = `${environment.HOST}/pacientes`;

  // Similar a un @Autowired
  constructor(private http : HttpClient ) { }

  // HttpClient asume que la respuesta es un JSON
  // Si fuese un xml o un arreglo de bytes, hay que hacer
  // un paso adicional, pero luego, cuando veamos PDF
  listar(){
    return this.http.get<Paciente[]>(this.url);
  }

  listarPorId(id: number){
    return this.http.get<Paciente>(`${this.url}/${id}`);
  }

  registrar(paciente : Paciente){
    return this.http.post(this.url, paciente);
  }

  modificar(paciente : Paciente){
    return this.http.put(this.url, paciente);
  }
  
  eliminar(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
*/
  //** get set subjects */

  /*
  getPacienteCambio(){
    return this.pacienteCambio.asObservable();
  }

  setPacienteCambio(pacientes : Paciente[]){
    this.pacienteCambio.next(pacientes);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }
*/

  /*  DESPUES DEL GENERIC SERVICE   */
export class PacienteService extends GenericService<Paciente> {
  private pacienteCambio = new Subject<Paciente[]>();
  private mensajeCambio = new Subject<string>();

  constructor(protected http: HttpClient) {
    super(
      http,
      `${environment.HOST}/pacientes`
    );
  }  
  
  listarPageable(p: number, s:number){
    return this.http.get<any>(`${this.url}/pageable?page=${p}&size=${s}`);
  }

  // get set subjects
  getPacienteCambio(){
    return this.pacienteCambio.asObservable();
  }

  setPacienteCambio(pacientes : Paciente[]){
    this.pacienteCambio.next(pacientes);
  }

  getMensajeCambio(){
    return this.mensajeCambio.asObservable();
  }

  setMensajeCambio(mensaje: string){
    return this.mensajeCambio.next(mensaje);
  }
  
}
