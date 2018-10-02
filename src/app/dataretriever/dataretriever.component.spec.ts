import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataretrieverComponent } from './dataretriever.component';

describe('DataretrieverComponent', () => {
  let component: DataretrieverComponent;
  let fixture: ComponentFixture<DataretrieverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataretrieverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataretrieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
