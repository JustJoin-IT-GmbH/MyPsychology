import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestYourselfComponent } from './test-yourself.component';

describe('TestYourselfComponent', () => {
  let component: TestYourselfComponent;
  let fixture: ComponentFixture<TestYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestYourselfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
