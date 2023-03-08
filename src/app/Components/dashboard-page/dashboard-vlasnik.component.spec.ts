import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardVlasnikComponent } from './dashboard-vlasnik.component';

describe('DashboardVlasnikComponent', () => {
  let component: DashboardVlasnikComponent;
  let fixture: ComponentFixture<DashboardVlasnikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardVlasnikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardVlasnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
