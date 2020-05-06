import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFaculdadePageRoutingModule } from './cadastro-faculdade-routing.module';

import { CadastroFaculdadePage } from './cadastro-faculdade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroFaculdadePageRoutingModule
  ],
  declarations: [CadastroFaculdadePage]
})
export class CadastroFaculdadePageModule {}
