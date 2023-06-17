import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Group, GroupCreationModel } from '../models/groups';

@Injectable({
  providedIn: 'root',
})
export class GroupsService {
  private BASE_URL_API: string = environment.BASE_URL_API;

  constructor(private http: HttpClient) {}

  get(latitude: number, longitude: number): Observable<Group[]> {
    return this.http.get<Group[]>(
      `${this.BASE_URL_API}/${latitude}/${longitude}`
    );
  }

  create(body: GroupCreationModel): Observable<GroupCreationModel> {
    return this.http.post<GroupCreationModel>(this.BASE_URL_API, body);
  }
}
