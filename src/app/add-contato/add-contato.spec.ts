import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContato } from './add-contato';

describe('AddContato', () => {
  let component: AddContato;
  let fixture: ComponentFixture<AddContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
