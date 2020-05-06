import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFaculdadePage } from './cadastro-faculdade.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFaculdadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFaculdadePageRoutingModule {}
