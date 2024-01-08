import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { NavComponent } from "./nav.component";

class ComponetTestRoute {}

// const routerMock = {
//   navigate() {},
// }

describe('Nav component', () => {

  let component:  NavComponent;
  let fixture:    ComponentFixture<NavComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'home',
            component: ComponetTestRoute
          },
          {
            path: 'cart',
            component: ComponetTestRoute
          }
        ]),
      ],
      declarations: [
        NavComponent,
      ],
      providers: [
        // {
        //   provide: Router, useValue: routerMock,
        // }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate', () => {

    const router = TestBed.inject(Router);

    const spy1 = spyOn(router, 'navigate');

    component.navTo('home');
    expect(spy1).toHaveBeenCalledWith(['/home']);

    component.navTo('cart');
    expect(spy1).toHaveBeenCalledWith(['/cart']);

  });

  // it('should navigate', () => {

  //   const router = TestBed.inject(Router);

  //   const spy1 = spyOn(router, 'navigate');

  //   component.navTo('');

  //   expect(spy1).toHaveBeenCalled();


  // });

});
