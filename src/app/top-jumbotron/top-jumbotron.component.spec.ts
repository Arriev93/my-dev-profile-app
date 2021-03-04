import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopJumbotronComponent } from './top-jumbotron.component';

describe('TopJumbotronComponent', () => {
  let component: TopJumbotronComponent;
  let fixture: ComponentFixture<TopJumbotronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopJumbotronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopJumbotronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
