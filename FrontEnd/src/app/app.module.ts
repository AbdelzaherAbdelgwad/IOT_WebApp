import { RouteGuardService } from './Services/route-guard.service';
import { LoginValidationService } from './log-in/Services/login-validation.service';
import { DoorLockService } from './home-user/Services/door-lock.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmartHospitalComponent } from './smart-hospital/smart-hospital.component';
import { HospitalAdminComponent } from './hospital-admin/hospital-admin.component';
import { HospitalSuperAdminComponent } from './hospital-super-admin/hospital-super-admin.component';
import { HospitalUserComponent } from './hospital-user/hospital-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeUserComponent } from './home-user/home-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SmartCompanyComponent } from './smart-company/smart-company.component';
import { SmartBankComponent } from './smart-bank/smart-bank.component';
import { HomeSuperAdminComponent } from './home-super-admin/home-super-admin.component';
import {HttpClientModule} from '@angular/common/http';
import { CompanyAdminComponent } from './company-admin/company-admin.component';
import { CompanySuperAdminComponent } from './company-super-admin/company-super-admin.component';
import { CompanyUserComponent } from './company-user/company-user.component';
import { SecurityAdminComponent } from './security-admin/security-admin.component';
import { MultiBarColumnComponentComponent } from './multi-bar-column-component/multi-bar-column-component.component'

const appRoute: Routes=[
  {path:'',redirectTo:'homePage',pathMatch:'full'},
  {path:'homePage',component:HomePageComponent},
  {path:'login', component:LogInComponent},
  {path:'Home',component:SmartHomeComponent},
  {path: 'Hospital',component:SmartHospitalComponent},
  {path: 'Company',component:SmartCompanyComponent},
  {path: 'HospitalAdmin',component:HospitalAdminComponent},
  {path: 'HospitalSuperAdmin',component:HospitalSuperAdminComponent},
  {path: 'HospitalUser',component:HospitalUserComponent},
  {path: 'HomeUser',component:HomeUserComponent, canActivate: [RouteGuardService]},
  {path: 'HomeAdmin',component:HomeAdminComponent},
  {path: 'CompanySuperAdmin',component:CompanySuperAdminComponent},
  {path: 'securityAdmin',component:SecurityAdminComponent,canActivate: [RouteGuardService]}
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomePageComponent,
    SmartHomeComponent,
    SmartHospitalComponent,
    HospitalAdminComponent,
    HospitalSuperAdminComponent,
    HospitalUserComponent,
    HomeUserComponent,
    HomeAdminComponent,
    HomeSuperAdminComponent,
    SmartCompanyComponent,
    SmartBankComponent,
    HomeSuperAdminComponent,
    CompanyAdminComponent,
    CompanySuperAdminComponent,
    CompanyUserComponent,
    SecurityAdminComponent,
    MultiBarColumnComponentComponent
  ],
  imports: [
      
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    DoorLockService,
    LoginValidationService,
    RouteGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
