import { HttpClient } from '@angular/common/http';

export class AppComponent {
  hello$ = this.httpClient.get('api/hello', { responseType: 'text' });
  constructor(private httpClient: HttpClient) { }
}