import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EndorsementformComponent } from './pages/endorsementform/endorsementform.component';
import { CompanydirectoryComponent } from './pages/companydirectory/companydirectory.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpassComponent } from './pages/forgotpass/forgotpass.component';
import { CompanyprofileComponent } from './pages/companyprofile/companyprofile.component';
import { StatusComponent } from './pages/status/status.component';
import { AdminSidebarComponent } from './pages/admin/components/admin-sidebar/admin-sidebar.component';
import { AdminEsignatureComponent } from './pages/admin/components/admin-esignature/admin-esignature.component';
import { AdminSubmissionsComponent } from './pages/admin/components/admin-submissions/admin-submissions.component';
import { AdminReportsComponent } from './pages/admin/components/admin-reports/admin-reports.component';
import { AdminAccountsComponent } from './pages/admin/components/admin-accounts/admin-accounts.component';
import { AdminLogsComponent } from './pages/admin/components/admin-logs/admin-logs.component';
import { AdminContentComponent } from './pages/admin/components/admin-content/admin-content.component';
import { AdminEventsComponent } from './pages/admin/components/admin-events/admin-events.component';
import { AdminIsoComponent } from './pages/admin/components/admin-iso/admin-iso.component';
import { AdminAcadyearComponent } from './pages/admin/components/admin-acadyear/admin-acadyear.component';
import { AdminDashboardComponent } from './pages/admin/components/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent,
    EndorsementformComponent,
    CompanydirectoryComponent,
    OnboardingComponent,
    LoginComponent,
    ForgotpassComponent,
    CompanyprofileComponent,
    StatusComponent,
    AdminSidebarComponent,
    AdminEsignatureComponent,
    AdminSubmissionsComponent,
    AdminReportsComponent,
    AdminAccountsComponent,
    AdminLogsComponent,
    AdminContentComponent,
    AdminEventsComponent,
    AdminIsoComponent,
    AdminAcadyearComponent,
    AdminDashboardComponent,
    NavbarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
