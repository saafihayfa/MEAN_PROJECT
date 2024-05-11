import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifContactComponent } from './modif-contact.component';

describe('ModifContactComponent', () => {
  let component: ModifContactComponent;
  let fixture: ComponentFixture<ModifContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
