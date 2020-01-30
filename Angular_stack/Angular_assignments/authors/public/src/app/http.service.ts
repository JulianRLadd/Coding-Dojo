import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
author:any;
  constructor(private _http: HttpClient) { 

  }

getAllAuthors(){
  // our http response is an Observable, store it in a variable
  //let tempObservable = this._http.get('/tasks');
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  //tempObservable.subscribe(data => console.log("Got our tasks!", data));
  return this._http.get('/authors');
}
getAuthor(id){
  // our http response is an Observable, store it in a variable
  let tempObservable = this._http.get('/authors/'+id);
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  tempObservable.subscribe(data => console.log("Got our author from service!", data));
  return this._http.get('/authors/'+id)
}
  addAuthor(newAuthor){
    return this._http.post('/authors', newAuthor)
}
  updateAuthor(author){
    return this._http.put('/authors/'+author._id, author)
}
  deleteAuthor(id){
    return this._http.delete('/authors/'+id)
}

}