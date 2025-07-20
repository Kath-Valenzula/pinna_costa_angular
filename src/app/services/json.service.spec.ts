import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JsonService } from './json.service';
import { Encargo } from '../models/encargo.model';
import { Producto } from '../models/producto.model';

describe('JsonService', () => {
  let service: JsonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JsonService]
    });
    service = TestBed.inject(JsonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener encargos', () => {
    const datos: Encargo[] = [
      { id: 1, nombre: 'enc', descripcion: 'desc', precio: 100 }
    ];

    service.getEncargos().subscribe(r => {
      expect(r).toEqual(datos);
    });

    const req = httpMock.expectOne('assets/data/encargos.json');
    expect(req.request.method).toBe('GET');
    req.flush(datos);
  });

  it('debería actualizar un encargo', () => {
    const enc: Encargo = { id: 1, nombre: 'a', descripcion: 'b', precio: 10 };

    service.updateEncargo(enc).subscribe(r => {
      expect(r).toEqual(enc);
    });

    const req = httpMock.expectOne('assets/data/encargos.json/1');
    expect(req.request.method).toBe('PUT');
    req.flush(enc);
  });

  it('debería eliminar un encargo', () => {
    service.deleteEncargo(1).subscribe(resp => {
      expect(resp).toBeNull();
    });

    const req = httpMock.expectOne('assets/data/encargos.json/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('debería obtener productos', () => {
    const productos: Producto[] = [
      { id: 1, nombre: 'p', precio: 20, imagen: 'img' }
    ];

    service.getProductos().subscribe(r => {
      expect(r).toEqual(productos);
    });

    const req = httpMock.expectOne('assets/data/productos.json');
    expect(req.request.method).toBe('GET');
    req.flush(productos);
  });

  it('debería actualizar un producto', () => {
    const prod: Producto = { id: 1, nombre: 'p', precio: 20, imagen: 'img' };

    service.updateProducto(prod).subscribe(r => {
      expect(r).toEqual(prod);
    });

    const req = httpMock.expectOne('assets/data/productos.json/1');
    expect(req.request.method).toBe('PUT');
    req.flush(prod);
  });

  it('debería eliminar un producto', () => {
    service.deleteProducto(1).subscribe(resp => {
      expect(resp).toBeNull();
    });

    const req = httpMock.expectOne('assets/data/productos.json/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
