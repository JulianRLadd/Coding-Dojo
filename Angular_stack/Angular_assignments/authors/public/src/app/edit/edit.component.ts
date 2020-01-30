import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id:any;
author:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) {
    this.author={name:''}
   }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      console.log('******OnINIT*******',params.get('id'))
      this.id = params.get('id')
      this.getAuthor(this.id);
    })
  }
  goHome() {
    this._router.navigate(['/']);
  }
  getAuthor(id) {
    let observable = this._httpService.getAuthor(id);
    console.log('**************GetAUTHOR******************');
    observable.subscribe(data=> {
      console.log(data);
      this.author = data;
    })
  }
  editAuthor(author:any){
    console.log('**************COMPONENT******************');
    this.author.name = this.author.name;
    let observable = this._httpService.updateAuthor(this.author)
    observable.subscribe(data =>{
      console.log("Edited author!",data)
    })
    
  }
}
