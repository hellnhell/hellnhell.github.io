import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMenuComponent } from './code-menu.component';

describe('CodeMenuComponent', () => {
  let component: CodeMenuComponent;
  let fixture: ComponentFixture<CodeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
