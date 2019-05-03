import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';
import { NavComponent } from 'src/app/components/layout/nav/nav.component';
import { LayoutComponent } from 'src/app/components/layout/layout.component';
import { ViewsComponent } from 'src/app/components/layout/views/views.component';

import { CollectionsRoutingModule } from 'src/app/routes/collections/collections-routing.module';


 

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    ViewsComponent,
  ],
  imports:[
    CollectionsRoutingModule,
    CommonModule,
  ],
  providers: [
  ],
})
export class CollectionsModule { }
