import { HttpClient } from '@angular/common/http';

export class ApiService<T, K> {
  constructor(private httpClient: HttpClient) {}

  getAll(): any {
    console.log(this.httpClient.get)
  }
  getOne(): any {}
}
