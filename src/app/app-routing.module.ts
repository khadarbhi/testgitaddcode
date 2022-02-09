import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AzurelabsComponent } from './StaticPages/azurelabs.component';
import { AzureresourcedemoComponent } from './StaticPages/azureresourcedemo.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: "create-User", component: CreateComponent},
  {path: "View", component: ViewComponent},
  {path: "AzureLabs", component: AzurelabsComponent},
  {path: "AzureResources", component: AzureresourcedemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
