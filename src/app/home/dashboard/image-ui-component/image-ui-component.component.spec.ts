import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUiComponentComponent } from './image-ui-component.component';

describe('ImageUiComponentComponent', () => {
  let component: ImageUiComponentComponent;
  let fixture: ComponentFixture<ImageUiComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUiComponentComponent]
    });
    fixture = TestBed.createComponent(ImageUiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
