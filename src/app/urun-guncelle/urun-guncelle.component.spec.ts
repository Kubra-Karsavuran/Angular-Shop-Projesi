import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrunGuncelleComponent } from './urun-guncelle.component';

describe('UrunGuncelleComponent', () => {
  let component: UrunGuncelleComponent;
  let fixture: ComponentFixture<UrunGuncelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrunGuncelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrunGuncelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
