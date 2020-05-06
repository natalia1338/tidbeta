import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroFaculdadePage } from './cadastro-faculdade.page';

describe('CadastroFaculdadePage', () => {
  let component: CadastroFaculdadePage;
  let fixture: ComponentFixture<CadastroFaculdadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFaculdadePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroFaculdadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
