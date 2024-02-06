import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProjectsComponent } from './photo-projects.component';

describe('PhotoProjectsComponent', () => {
  let component: PhotoProjectsComponent;
  let fixture: ComponentFixture<PhotoProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
