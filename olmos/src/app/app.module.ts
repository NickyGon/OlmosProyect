import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuPrinComponent } from './menu-prin/menu-prin.component';
import { DataMenuComponent } from './data-menu/data-menu.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './menu-prin/usuario/usuario.component';
import { ContenidoComponent } from './menu-prin/contenido/contenido.component';
import { ListHabitacionesComponent } from './menu-prin/contenido/list-habitaciones/list-habitaciones.component';
import { ListReservasComponent } from './menu-prin/contenido/list-reservas/list-reservas.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { HabitComponent } from './menu-prin/dialogs/habit/habit.component';
import { ReservComponent } from './menu-prin/dialogs/reserv/reserv.component';
import { HideMeDirective } from './directives/hide-me.directive';
import { ListUsuarioComponent } from './menu-prin/contenido/list-usuario/list-usuario.component';
import { RegisterReservaComponent } from './forms/register-reserva/register-reserva.component';
import { RegisterHabitacionComponent } from './forms/register-habitacion/register-habitacion.component';
import { EditReservaComponent } from './forms/edit-reserva/edit-reserva.component';
import { EditHabitacionComponent } from './forms/edit-habitacion/edit-habitacion.component';
import { EditUsuarioComponent } from './forms/edit-usuario/edit-usuario.component';
import { RegisterComponent } from './register/register.component';
import { HabitEditComponent } from './menu-prin/dialogs/habit-edit/habit-edit.component';
import { HabitDeleteComponent } from './menu-prin/dialogs/habit-delete/habit-delete.component';
import { ReservaDeleteComponent } from './menu-prin/dialogs/reserva-delete/reserva-delete.component';
import { ReservaEditComponent } from './menu-prin/dialogs/reserva-edit/reserva-edit.component';
import { UsuarioEditComponent } from './menu-prin/dialogs/usuario-edit/usuario-edit.component';
import { UsuarioDeleteComponent } from './menu-prin/dialogs/usuario-delete/usuario-delete.component';
import { HabitRegisterComponent } from './menu-prin/dialogs/habit-register/habit-register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuPrinComponent,
    DataMenuComponent,
    HeaderComponent,
    UsuarioComponent,
    ContenidoComponent,
    ListHabitacionesComponent,
    ListReservasComponent,
    HabitComponent,
    ReservComponent,
    HideMeDirective,
    ListUsuarioComponent,
    RegisterReservaComponent,
    RegisterHabitacionComponent,
    EditReservaComponent,
    EditHabitacionComponent,
    EditUsuarioComponent,
    RegisterComponent,
    HabitEditComponent,
    HabitDeleteComponent,
    ReservaDeleteComponent,
    ReservaEditComponent,
    UsuarioEditComponent,
    UsuarioDeleteComponent,
    HabitRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
