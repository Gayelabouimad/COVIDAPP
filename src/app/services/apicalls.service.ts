import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallsService {

  constructor(private http: HttpClient) { }

  getData(routeName) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
      })
    }
    return this.http.get("http://localhost:8094/" + routeName, httpOptions);
  }

  postData(routeName, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("http://localhost:8094/" + routeName, data ,httpOptions).pipe();
  }

  deleteData(routeName, dataID){
    const httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": '*',
        'Content-Type': 'application/json'
      })
    }
    return this.http.delete("http://localhost:8094/" + routeName + "/" + dataID, httpOptions);
  }
}
