import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaudosComponent } from './recaudos.component';

describe('RecaudosComponent', () => {
  let component: RecaudosComponent;
  let fixture: ComponentFixture<RecaudosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecaudosComponent]
    });
    fixture = TestBed.createComponent(RecaudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
