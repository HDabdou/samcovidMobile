import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrangeComponent } from './orange.component';

describe('OrangeComponent', () => {
  let component: OrangeComponent;
  let fixture: ComponentFixture<OrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
