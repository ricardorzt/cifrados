import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCifradoComponent } from './formulario-cifrado.component';

describe('FormularioCifradoComponent', () => {
  let component: FormularioCifradoComponent;
  let fixture: ComponentFixture<FormularioCifradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCifradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCifradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
