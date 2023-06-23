import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperMarioPage } from './super-mario.page';

describe('SuperMarioPage', () => {
  let component: SuperMarioPage;
  let fixture: ComponentFixture<SuperMarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuperMarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
