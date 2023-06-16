import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private BASE_URL_API: string = environment.BASE_URL_API;

  constructor(private http: HttpClient) {}

  getGroups(latitude: number, longitude: number): Observable<any> {
    return this.http.get(`${this.BASE_URL_API}/${latitude}/${longitude}`);
  }
}
