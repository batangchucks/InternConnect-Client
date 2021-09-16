import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { LoginComponent } from './pages/login/login.component';
import { ForgotpassComponent } from './pages/forgotpass/forgotpass.component';
import { EndorsementformComponent } from './pages/endorsementform/endorsementform.component';
import { CompanydirectoryComponent } from './pages/companydirectory/companydirectory.component';
import { CompanyprofileComponent } from './pages/companyprofile/companyprofile.component';
import { StatusComponent } from './pages/landing/components/status/status.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminDashboardComponent } from './pages/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminEsignatureComponent } from './pages/admin/components/admin-esignature/admin-esignature.component';
import { AdminSubmissionsComponent } from './pages/admin/components/admin-submissions/admin-submissions.component';
import { NewSubmissionsComponent } from './pages/admin/components/admin-submissions/components/new-submissions/new-submissions.component';
import { PendingSubmissionsComponent } from './pages/admin/components/admin-submissions/components/pending-submissions/pending-submissions.component';
import { ApprovedSubmissionsComponent } from './pages/admin/components/admin-submissions/components/approved-submissions/approved-submissions.component';
import { FinalSubmissionsComponent } from './pages/admin/components/admin-submissions/components/final-submissions/final-submissions.component';
import { LandingUpdateComponent } from './pages/admin/components/admin-content/components/landing-update/landing-update.component';
import { CompanydirectoryUpdateComponent } from './pages/admin/components/admin-content/components/companydirectory-update/companydirectory-update.component';
import { OpportunitiesUpdateComponent } from './pages/admin/components/admin-content/components/opportunities-update/opportunities-update.component';
import { ChairComponent } from './pages/admin/components/admin-accounts/components/chair/chair.component';
import { CoordinatorComponent } from './pages/admin/components/admin-accounts/components/coordinator/coordinator.component';
import { DeanComponent } from './pages/admin/components/admin-accounts/components/dean/dean.component';
import { TechprogramComponent } from './pages/admin/components/admin-accounts/components/techprogram/techprogram.component';
import { StudentsComponent } from './pages/admin/components/admin-accounts/components/students/students.component';
import { ProgramsComponent } from './pages/admin/components/admin-accounts/components/programs/programs.component';
import { SectionsComponent } from './pages/admin/components/admin-accounts/components/sections/sections.component';
import { AdminReportsComponent } from './pages/admin/components/admin-reports/admin-reports.component';
import { AdminEventsComponent } from './pages/admin/components/admin-events/admin-events.component';
import { AdminIsoComponent } from './pages/admin/components/admin-iso/admin-iso.component';
import { AdminAcadyearComponent } from './pages/admin/components/admin-acadyear/admin-acadyear.component';
import { AdminLogsComponent } from './pages/admin/components/admin-logs/admin-logs.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  { path: 'onboarding', 
    component: OnboardingComponent,
  },
  { path: 'login',  
    component: LoginComponent,
  },
  { path: 'forgotpass', 
    component: ForgotpassComponent,
  },
  { 
    path: 'endorsementform',
    component: EndorsementformComponent,
  },
  { path: 'companydirectory', 
    component: CompanydirectoryComponent,
  },
  { path: 'companyprofile',
    component: CompanyprofileComponent,
  },
  { path: 'status',
    component: StatusComponent,
  },
  { path: 'admin',
    component: AdminComponent,
    children: [
      { path: '',
        component: AdminDashboardComponent,
      },
      { path: 'esignature',
        component: AdminEsignatureComponent,
      },
      { path: 'admin-submissions',
        component: AdminSubmissionsComponent,
      },
      { path: 'new-submissions',
        component: NewSubmissionsComponent,
      },
      { path: 'pending-submissions',
        component: PendingSubmissionsComponent,
      },
      { path: 'approved-submissions',
        component: ApprovedSubmissionsComponent,
      },
      { path: 'final-submissions',
      component: FinalSubmissionsComponent,
      },
      { path: 'update-landing',
      component: LandingUpdateComponent,
      },
      { path: 'update-companydirectory',
      component: CompanydirectoryUpdateComponent,
      },
      { path: 'update-opportunities',
      component: OpportunitiesUpdateComponent,
      },
      { path: 'chair',
      component: ChairComponent,
      },
      { path: 'coordinators',
      component: CoordinatorComponent,
      },
      { path: 'dean',
      component: DeanComponent,
      },
      { path: 'techprogram',
      component: TechprogramComponent,
      },
      { path: 'students',
      component: StudentsComponent,
      },
      { path: 'programs',
      component: ProgramsComponent,
      },
      { path: 'sections',
      component: SectionsComponent,
      },
      { path: 'reports',
      component: AdminReportsComponent,
      },
      { path: 'events',
      component: AdminEventsComponent,
      },
      { path: 'iso',
      component: AdminIsoComponent,
      },
      { path: 'acadyear',
      component: AdminAcadyearComponent,
      },
      { path: 'logs',
      component: AdminLogsComponent,
      },
    ],
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
