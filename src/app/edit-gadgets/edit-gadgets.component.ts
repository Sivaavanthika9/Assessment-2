import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { GadgetsService } from '../shared/gadgets.service';

@Component({
  selector: 'app-edit-gadgets',
  templateUrl: './edit-gadgets.component.html',
  styleUrl: './edit-gadgets.component.scss'
})
export class EditGadgetsComponent {
  id=this.actRoute.snapshot.params['id'];
  gadgetData !:FormGroup;
  constructor(
    public gadgetApi: GadgetsService,
    public actRoute: ActivatedRoute,
    public router:Router,
    private fb:FormBuilder

  ){
    console.log("Hiiiiiii")

  }

  ngOnInit(){
    this.gadgetData=this.fb.group({
      id:[],
      name:[],
      image:[],
      price:[],
      desc:[]
    })
  console.log('this.actroute.snapshot.params["id"]',this.actRoute.snapshot.params['id']);
    this.gadgetApi.getGadget(this.id).subscribe((data:any)=>{
      this.gadgetData.setValue(data);
    })
  }
  updateGadget(){
   console.log('updateGadget called')
    if(window.confirm('are you sure,you want to update?')){
      this.gadgetApi.updateGadget(this.id,this.gadgetData.value).subscribe(data=>{
     this.router.navigate(['gadgets'])
      })
    }
  }


}
