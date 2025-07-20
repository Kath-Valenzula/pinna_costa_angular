import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JsonPlaceholderService } from './json-placeholder.service';
import { Post } from '../models/post.model';

describe('JsonPlaceholderService', () => {
  let service: JsonPlaceholderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JsonPlaceholderService]
    });
    service = TestBed.inject(JsonPlaceholderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener publicaciones (GET)', () => {
    const dummyPosts: Post[] = [{ userId: 1, id: 1, title: 't1', body: 'b1' }];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(1);
      expect(posts).toEqual(dummyPosts);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPosts);
  });

  it('debería crear una publicación (POST)', () => {
    const newPost: Post = { userId: 1, title: 'nuevo', body: 'contenido' };

    service.addPost(newPost).subscribe(post => {
      expect(post).toEqual({ ...newPost, id: 101 });
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(req.request.method).toBe('POST');
    req.flush({ ...newPost, id: 101 });
  });

  it('debería actualizar una publicación (PUT)', () => {
    const update: Post = { userId: 1, id: 1, title: 'upd', body: 'upd' };

    service.updatePost(1, update).subscribe(post => {
      expect(post).toEqual(update);
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1');
    expect(req.request.method).toBe('PUT');
    req.flush(update);
  });

  it('debería eliminar una publicación (DELETE)', () => {
    service.deletePost(1).subscribe(resp => {
      expect(resp).toBeNull();
    });

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts/1');
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});