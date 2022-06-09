import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminDashboardComponent, HomeComponent],
  imports: [CommonModule, AdminRoutingModule,
    ReactiveFormsModule],
})
export class AdminModule {}
