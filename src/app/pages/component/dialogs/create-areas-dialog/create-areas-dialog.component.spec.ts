import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAreasDialogComponent } from './create-areas-dialog.component';

describe('CreateAreasDialogComponent', () => {
  let component: CreateAreasDialogComponent;
  let fixture: ComponentFixture<CreateAreasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAreasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAreasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
