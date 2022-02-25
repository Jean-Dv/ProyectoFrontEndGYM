import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAsistenciaInicioComponent } from './listar-asistencia-inicio.component';

describe('ListarAsistenciaInicioComponent', () => {
  let component: ListarAsistenciaInicioComponent;
  let fixture: ComponentFixture<ListarAsistenciaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAsistenciaInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAsistenciaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
