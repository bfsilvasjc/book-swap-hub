import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuElementComponent } from './main-menu-element.component';

describe('MainMenuElementComponent', () => {
  let component: MainMenuElementComponent;
  let fixture: ComponentFixture<MainMenuElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMenuElementComponent]
    });
    fixture = TestBed.createComponent(MainMenuElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
