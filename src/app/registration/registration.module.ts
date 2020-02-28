import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { RegistrationComponent } from './registration.component';
import { RouterModule,Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '', component: RegistrationComponent,
     children: [
       {
         path: 'Personl-details',
         component: PersonalDetailsComponent
       }
  
     ]
  }
];

@NgModule({
  declarations: [PersonalDetailsComponent, RegistrationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RegistrationModule { }
