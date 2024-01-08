
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

import { ConfirmDialogComponent } from "./confirmation-dialog.component";


const MatDialogMock = {
  close: () => null,
}

describe('Confirm dialog component', () => {

  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [
        ConfirmDialogComponent
      ],
      providers: [
        // MatDialogRef,
        // MAT_DIALOG_DATA
        {
          provide: MatDialogRef, useValue: MatDialogMock
        },
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA,
      ]
    }).compileComponents()
  });


  beforeEach( () => {

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onConfirm send true value', () => {
    // const service = fixture.debugElement.injector.get(MatDialogRef);
    const service = TestBed.inject(MatDialogRef);
    const spy1 = spyOn(service, 'close');
    component.onConfirm();
    expect(spy1).toHaveBeenCalledWith(true);
  });

  it('onConfirm send false value', () => {
    const service = TestBed.inject(MatDialogRef);
    const spy1 = spyOn(service, 'close');
    component.onDismiss();
    expect(spy1).toHaveBeenCalledWith(false);
  });

});
