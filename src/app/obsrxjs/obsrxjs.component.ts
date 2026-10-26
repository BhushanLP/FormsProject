import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-obsrxjs',
  templateUrl: './obsrxjs.component.html',
  styleUrls: ['./obsrxjs.component.css']
})
export class ObsrxjsComponent {
  
  user:any;
  // working with observable
  // const myObs$ = new Observable((value)=>{
    //   value.next('Hello');
    // })
    constructor(private sharedService:SharedService, private route: ActivatedRoute) { 
      // myObs$.subscribe((res:any)=>{
        //   console.log(res);
        // });
        this.sharedService.getUsers().subscribe((res:any)=>{
          console.log(res);
          this.user = res;
        })
    }   



   obs$ = new Observable();
    userId: string = '';
     tab: string = '';
     page:any;

  ngOnInit() {

this.sharedService.getData().subscribe(res=>console.log(res))

     // Route Parameter
    this.userId = this.route.snapshot.paramMap.get('idd') || '';    
    console.log(this.userId);

       // Query Parameter
    this.route.queryParamMap.subscribe(params => {
      this.tab = params.get('tab') || '';
      this.page = params.get('page') || 0;
    });
  }


  obscall(){

  }


}
