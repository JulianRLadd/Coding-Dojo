
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient){
  }

getCakes(){
  // our http response is an Observable, store it in a variable
  //let tempObservable = this._http.get('/cakes');
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  //tempObservable.subscribe(data => console.log("Got our cakes!", data));
  return this._http.get('/cakes');
}
getCake(cake){
  // our http response is an Observable, store it in a variable
  let tempObservable = this._http.get('/cakes/'+cake._id);
  // subscribe to the Observable and provide the code we would like to do with our data from the response
  tempObservable.subscribe(data => console.log("Got our cake!", data));
  return this._http.get('/cakes/'+cake._id)
}

  addCake(newcake){
    return this._http.post('/cakes', newcake)
}
  updateCake(cake){
    // let observable = this._http.put('/cakes/'+cake._id,cake.reviews);
    // console.log('**************SERVICE******************');
    // console.log(cake);
    // observable.subscribe(data => console.log("Updated cake!", data));
    console.log('****',cake.reviews)
    return this._http.put('/cakes/'+cake._id, cake)
}

}
