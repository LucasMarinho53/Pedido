import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pedido/create/create.component';
import { EditComponent } from './pedido/edit/edit.component';
import { HomeComponent } from './pedido/home/home.component';
import { ListComponent } from './pedido/list/list.component';

const routes: Routes = [
  {
  path: "",
  redirectTo: "pedido/home",
  pathMatch: "full",
  },
    {
    path: "pedido/create",
    component: CreateComponent,
    },
      {
      path: "pedido/list",
      component: ListComponent,
      },
        {
        path: "pedido/home",
        component: HomeComponent,
        },
          {
          path: "pedido/edit/:id",
          component: EditComponent,
          }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
