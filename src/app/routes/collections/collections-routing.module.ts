import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Main Nav Components
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { CollectionsComponent } from 'src/app/components/shared/collections/collections.component';
import { DashboardComponent } from 'src/app/components/shared/dashboard/dashboard.component';
import { InvoiceComponent } from 'src/app/components/shared/invoice/invoice.component';
import { ReleaseComponent } from 'src/app/components/shared/release/release.component';
import { InputsComponent } from 'src/app/components/shared/inputs/inputs.component';



// Import necessary plugins
import { ChartsModule } from 'ng2-charts';
import { NgxPaginationModule } from 'ngx-pagination';


// popup component
import { PopupModalComponent } from 'src/app/components/popup-modal/popup-modal.component';

// Collection Pages
import { UntaggedComponent } from 'src/app/components/collections/untagged/untagged.component';
import { MostprobablematchComponent } from 'src/app/components/collections/mostprobablematch/mostprobablematch.component';
import { FinancialexceptionsComponent } from 'src/app/components/collections/financialexceptions/financialexceptions.component';
import { SalaryreleaseComponent } from 'src/app/components/collections/salaryrelease/salaryrelease.component';
import { SalaryprocessComponent } from 'src/app/components/collections/salaryprocess/salaryprocess.component';

// Collection details componets 
import { UntaggedDetailsComponent } from 'src/app/components/collections/untagged/untagged-details/untagged-details.component';
import { MostprobablematchdetailsComponent } from 'src/app/components/collections/mostprobablematch/mostprobablematchdetails/mostprobablematchdetails.component';
import { SrdetailsComponent } from 'src/app/components/collections/salaryrelease/srdetails/srdetails.component';
import { SpdetailsComponent } from 'src/app/components/collections/salaryprocess/spdetails/spdetails.component';


// import { RemunderscorePipe } from '../../pipes/remunderscore.pipe';
// import { RemwhitespacesPipe } from '../../pipes/remwhitespaces.pipe';
import { AuthGuardService } from 'src/app/services/auth/auth-guard.service';




const sharedRoutes: Routes = [
  {
    path:'home',
    component:LayoutComponent,
    canActivate:[AuthGuardService],
    children:[
      {
        path:"collections",
        component:CollectionsComponent,
        canActivate:[AuthGuardService],
        children:[
          {
            path: '',
            redirectTo: 'untagged',
            pathMatch:'full',
          },
          {
            path: 'untagged',
            component: UntaggedComponent,
          },
          {
            path:"financialexceptions",
            component:FinancialexceptionsComponent,
          },
          {
            path:"mostprobablematch",
            component:MostprobablematchComponent,
          },
          {
            path:"salaryrelease",
            component:SalaryreleaseComponent
          },
          {
            path:"salaryprocess",
            component:SalaryprocessComponent
          },
        ]
      },
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"invoice",
        component:InvoiceComponent
      },
      {
        path:"release",
        component:ReleaseComponent
      },
      {
        path:"inputs",
        component:InputsComponent
      },
      {
        path:"",
        redirectTo: 'collections',
        pathMatch:'full'
      }
    ],
  },
  {
    path:"collections",
    redirectTo:"home"
  },
  {
    path:"",
    redirectTo:"home/collections",
    pathMatch:'full'
  },
  {
    path:"**",
    redirectTo:"home/collections",
    pathMatch:'full'
  }
  
];


const mainNav = [
  CollectionsComponent,
  DashboardComponent,
  InvoiceComponent,
  ReleaseComponent,
  InputsComponent
];

const collectionNav = [
  UntaggedComponent,
  MostprobablematchComponent,
  FinancialexceptionsComponent,
  SalaryprocessComponent,
  SalaryreleaseComponent,
  UntaggedDetailsComponent,
  MostprobablematchdetailsComponent,
  SrdetailsComponent,
  SpdetailsComponent
];

const plugins = [
  ChartsModule,
  NgxPaginationModule
]

@NgModule({
  declarations:[
    ...mainNav,
    ...collectionNav,
    PopupModalComponent,
  ],
  imports: [
    RouterModule.forChild(sharedRoutes),
    CommonModule,
    FormsModule,
    ...plugins
  ],
  exports: [RouterModule],
  providers:[AuthGuardService]
})
export class CollectionsRoutingModule { }
