import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from 'interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL= 'https://portfolio-mariquenaallosa.koyeb.app/skills/';
  constructor(private http: HttpClient) { }
    public get(): Observable<Skills[]>{
      console.log("El servicio portfolio skills esta corriendo");
      return this.http.get<Skills[]>(this.URL + 'lista');
    }
  
    public detail(id: number): Observable<Skills>{
      return this.http.get<Skills>(this.URL + `detail/${id}`);
    } 
  
    public save(skills: Skills): Observable<any>{
      return this.http.post<any>(this.URL + 'create', skills);
    }
  
    public edit(skills: Skills): Observable<any>{
      return this.http.put<any>(this.URL + 'update', skills);
    }
  
    public delete(id: number): Observable<any>{
      return this.http.delete<any>(this.URL + `delete/${id}`);
    }
}
