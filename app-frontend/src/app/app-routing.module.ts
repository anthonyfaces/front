import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConsultaEspecialComponent } from './pages/consulta-especial/consulta-especial.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { WizardComponent } from './pages/consulta/wizard/wizard.component';
import { EspecialidadEdcionComponent } from './pages/especialidad/especialidad-edcion/especialidad-edcion.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ExamenEdicionComponent } from './pages/examen/examen-edicion/examen-edicion.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { LoginComponent } from './pages/login/login.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [
  { path: 'paciente', component: PacienteComponent, children:[
    {path: 'nuevo', component: PacienteEdicionComponent},
    {path: 'edicion/:id', component: PacienteEdicionComponent}
    ] 
  },
  { path: 'examen', component: ExamenComponent, children:[
    {path: 'nuevo', component: ExamenEdicionComponent},
    {path: 'edicion/:id', component: ExamenEdicionComponent}
    ] 
  },
  {
    path: 'especialidad', component: EspecialidadComponent, children: [
      { path: 'nuevo', component: EspecialidadEdcionComponent },
      { path: 'edicion/:id', component: EspecialidadEdcionComponent }
    ]
  },
  { path: 'medico', component: MedicoComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'consulta-especial', component: ConsultaEspecialComponent },
  { path: 'consulta-wizard', component: WizardComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
