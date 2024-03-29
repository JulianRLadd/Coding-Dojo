import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
 newAuthor:any;
 errors:any;
 data:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit() {
    this.newAuthor = { name: "", quotes: [] }
    this.errors = "";

  }
  goHome() {
    this._router.navigate(['/']);
  }
  
  onSubmit() {
    // Code to send off the form data (this.newcake) to the Service
    let observable = this._httpService.addAuthor(this.newAuthor);
      observable.subscribe(data => {
        if(data.errors){
          console.log(data.message)
          this.errors = data.message;
        }
        else{
          console.log("Added author!", data)
          // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
          // This may be different for you, depending on how you set up your cake API.
          // Reset this.newcake to a new, clean object.
          this.newAuthor = { name: "", quotes: [] }
          this.goHome();
        }
      });
  }
}
