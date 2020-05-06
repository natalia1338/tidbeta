import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.page.html',
  styleUrls: ['./fornecedor.page.scss'],
})
export class FornecedorPage implements OnInit {

  cadastroforecedordata:any ={};

  constructor() { }

  ngOnInit() {
  }

  Cadastrofornecedor(){
    
    
    console.log("Razao_social:",this.cadastroforecedordata.Razao_social);
    console.log("CNPJ:",this.cadastroforecedordata.CNPJ);
    console.log("Telefone:",this.cadastroforecedordata.Telefone);
    console.log("CEP",this.cadastroforecedordata.CEP);
    console.log("Rua",this.cadastroforecedordata.Rua);
    console.log("numero",this.cadastroforecedordata.numero);
    console.log("Cidade",this.cadastroforecedordata.Cidade);
    console.log("Estado",this.cadastroforecedordata.Estado);
    console.log("Pais",this.cadastroforecedordata.Pais);
    
}

}
