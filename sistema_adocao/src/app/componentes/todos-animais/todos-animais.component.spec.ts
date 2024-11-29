import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosAnimaisComponent } from './todos-animais.component';

describe('TodosAnimaisComponent', () => {
  let component: TodosAnimaisComponent;
  let fixture: ComponentFixture<TodosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosAnimaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
