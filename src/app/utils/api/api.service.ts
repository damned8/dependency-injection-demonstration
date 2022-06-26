import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class ApiService<SingleSearchParams, Single, PluraSearchParams, Plural> {
  constructor(
    private httpClient: HttpClient,
    private config: {
      pluralApi?: (prop: PluraSearchParams) => string;
      singleApi?: (prop: SingleSearchParams) => string;
    }
  ) {}

  getAll(props: PluraSearchParams): Observable<Plural> {
    if (!this.config.pluralApi) {
      throw new Error('ApiService config.pluralApi() is not implemented');
    }
    return this.httpClient.get<Plural>(this.config.pluralApi(props));
  }

  getOne(props: SingleSearchParams): Observable<Single> {
    if (!this.config.singleApi) {
      throw new Error('ApiService config.singleApi() is not implemented');
    }
    return this.httpClient.get<Single>(this.config.singleApi(props));
  }
}
