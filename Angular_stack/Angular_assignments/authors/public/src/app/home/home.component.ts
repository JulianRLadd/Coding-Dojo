import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any;
  selectedAuthor:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.authors = [];
    this.getAuthorsFromService();
  }
  deleteAuthor(id){
    console.log(`Deleting author...`,id)
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("Deleted author!", data)
      // In this example, the array of tasks is assigned to the key 'tasks' in the data object. 
      // This may be different for you, depending on how you set up your Task API.
      this.getAuthorsFromService();
    });
  }
  getAuthorsFromService(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe(data => {
      console.log("Got our authors!", data)
      // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
      // This may be different for you, depending on how you set up your cake API.
      this.authors = data;
      console.log(this.authors)
    });

  }
}
