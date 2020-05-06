import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-faculdade',
  templateUrl: './cadastro-faculdade.page.html',
  styleUrls: ['./cadastro-faculdade.page.scss'],
})
export class CadastroFaculdadePage implements OnInit {

  constructor() { }

  cadastrofacudata:any ={};

  ngOnInit() {
  }

  Cadastrofaculdade(){
    
    
    console.log("Faculdade:",this.cadastrofacudata.faculdade);
    console.log("Num_da_matricula:",this.cadastrofacudata.Num_da_matricula);
    console.log("Status:",this.cadastrofacudata.Status);
    console.log("Cargo",this.cadastrofacudata.Cargo);
    console.log("CEP",this.cadastrofacudata.CEP);
    console.log("Rua",this.cadastrofacudata.Rua);
    console.log("numero",this.cadastrofacudata.numero);
    console.log("Cidade",this.cadastrofacudata.Cidade);
    console.log("Estado",this.cadastrofacudata.Estado);
    console.log("Pais",this.cadastrofacudata.Pais);

}

}
