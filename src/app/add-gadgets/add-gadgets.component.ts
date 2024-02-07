import { Component } from '@angular/core';
import { GadgetsService } from '../shared/gadgets.service';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-add-gadgets',
  templateUrl: './add-gadgets.component.html',
  styleUrl: './add-gadgets.component.scss'
})
export class AddGadgetsComponent {
  @Input() gadgetDetails={ name:'',image:'',price:'',desc:''};
  constructor(public gadgetApi: GadgetsService,public router:Router){}
  ngOnInit(){}
  addGadget(dataGadget:any){
    this.gadgetApi.CreateGadget(this.gadgetDetails).subscribe((data:{})=>{
      this.router.navigate(['/'])
    });
  }


}
