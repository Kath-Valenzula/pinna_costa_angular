 import { ComponentFixture, TestBed } from '@angular/core/testing';
 import { HttpClientTestingModule } from '@angular/common/http/testing';
 import { EncargosComponent } from './encargos.component';
 
 describe('EncargosComponent', () => {
   let component: EncargosComponent;
   let fixture: ComponentFixture<EncargosComponent>;
 
   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [EncargosComponent],
       imports: [HttpClientTestingModule]
     }).compileComponents();
 
     fixture = TestBed.createComponent(EncargosComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
 
   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });
