import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunSilComponent } from './urun-sil.component';

describe('UrunSilComponent', () => {
  let component: UrunSilComponent;
  let fixture: ComponentFixture<UrunSilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunSilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrunSilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
