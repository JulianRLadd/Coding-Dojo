
import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { CakesComponent } from './cakes/cakes.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Implement OnInit.
export class AppComponent implements OnInit {
  cakes:[];
  newCake: any;
  id: any;
  selectedCake:any;
  review:any = {rating:0,
                comments: ''};
  rate:any;
  avgRate:any;
  
    constructor(private _httpService: HttpService){}
    // ngOnInit will run when the component is initialized, after the constructor method.
    ngOnInit(){
      
      this.cakes = [];
      this.newCake = { baker: "", img: "" }
      this.getCakesFromService();
      this.avgRate = 0;
      
    }
    
    cakeToShow(cake:any):void{
      let observable = this._httpService.getCake(cake);
      observable.subscribe(data =>{
        console.log("Cake is selected!",data)
        this.selectedCake = data;
        this.findAvg(this.selectedCake)
        this.getCakesFromService();

      })
    }
    findAvg(cake:any):Number{
      var sum = 0;
      for (let num of cake.reviews) {
        console.log("Rating",Number(num.rating))
        sum += Number(num.rating);
        console.log("Sum",sum)
    }
    this.avgRate = Math.round(((sum/Number(cake.reviews.length)) + Number.EPSILON) * 100) / 100
  
    console.log("*************")
    console.log("avgRate",this.avgRate)
    return this.avgRate;
    }
  onSubmit() {
    // Code to send off the form data (this.newcake) to the Service
    let observable = this._httpService.addCake(this.newCake);
      observable.subscribe(data => {
        console.log("Added cakes!", data)
        // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
        // This may be different for you, depending on how you set up your cake API.
        this.cakes = data['cakes'];
      });
    // Reset this.newcake to a new, clean object.
    this.newCake = { title: "", description: "" }
    this.getCakesFromService();
  }

  rateCake(cake:any){
    console.log('**************COMPONENT******************');
    console.log(cake,this.review);
    cake.reviews.push(this.review)
    let observable = this._httpService.updateCake(cake)
    observable.subscribe(data =>{
      console.log("Rated Cake!",data)
    })
  }
    getCakesFromService(){
      let observable = this._httpService.getCakes();
      observable.subscribe(data => {
        console.log("Got our cakes!", data)
        // In this example, the array of cakes is assigned to the key 'cakes' in the data object. 
        // This may be different for you, depending on how you set up your cake API.
        this.cakes = data['cakes'];
      });
    }

}
