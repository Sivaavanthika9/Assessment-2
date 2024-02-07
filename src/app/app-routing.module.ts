import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGadgetsComponent } from './add-gadgets/add-gadgets.component';
import { EditGadgetsComponent } from './edit-gadgets/edit-gadgets.component';
import { GadgetsComponent } from './gadgets/gadgets.component';

const routes: Routes = [
  {path:'edit-gadgets/:id',component:EditGadgetsComponent},
  {path:'add-gadgets',component:AddGadgetsComponent},
  {path:'gadgets',component:GadgetsComponent},
  {path:'',redirectTo:'gadgets',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
