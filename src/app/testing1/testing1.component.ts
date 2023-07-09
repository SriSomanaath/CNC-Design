import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing1',
  templateUrl: './testing1.component.html',
  styleUrls: ['./testing1.component.css']
})
export class Testing1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lightState(i,val){ 
    var valueOfLight = val[i]['lightVal']
    let countIdealState = 0;
    $(document).ready(function(){
    var colorId =document.getElementById("machLights"+ i) as HTMLInputElement
    var colorId_sum =document.getElementById("machLights_summary"+ i) as HTMLInputElement
    
    if(valueOfLight == 1)
    {
      console.log('??????????',valueOfLight)
       colorId.classList.add("red");
       colorId_sum.classList.add("red_summary");
       this.paramVal[i]['state'] ="RESTART";
    }else if(valueOfLight == 2){
      colorId.classList.add("yellow");
      colorId_sum.classList.add("yellow_summary");
      this.paramVal[i]['state'] = "HOLD";
    }else if(valueOfLight == 3){
      colorId.classList.add("yellow");
      colorId_sum.classList.add("yellow_summary");
      this.paramVal[i]['state'] = "STOP";
    }
    else if(valueOfLight == 4){
      colorId.classList.add("green");
      colorId_sum.classList.add("green_summary");
      this.paramVal[i]['state'] = "RUNNING";
    }
    else if(valueOfLight == 0){
      colorId.classList.add("grey");
      this.paramVal[i]['state'] ="NULL";
    }
  }.bind(this))
  }


  UpdateSummaryMachine(val,paramVal){
    var lightVal = paramVal[val]['lightVal'] 
    $(document).ready(function(){
    if(lightVal == 1){
    var animCode = `slide ${0}s infinite`;
    var updateWorkpiece = document.getElementById("workpiece" + val) as HTMLInputElement
    var updateLaser = document.getElementById("laser" + val) as HTMLInputElement
    var updateMachineBackground = document.getElementById("workbench" + val) as HTMLInputElement
    updateMachineBackground.style.background = `linear-gradient(to bottom, #b7cee3 0%, #557484 100%, #004a65 117%)`;
    updateLaser.classList.remove("glowing-line");
    updateWorkpiece.style.animation = animCode;
    }
    if(lightVal == 2){
      var animCode = `slide ${0}s infinite`;
    var updateWorkpiece = document.getElementById("workpiece" + val) as HTMLInputElement
    var updateLaser = document.getElementById("laser" + val) as HTMLInputElement
    var updateMachineBackground = document.getElementById("workbench" + val) as HTMLInputElement
    updateLaser.classList.remove("glowing-line");
    updateMachineBackground.style.background = `linear-gradient(to bottom, #b7cee3 0%, #557484 100%, #004a65 117%)`;
    updateWorkpiece.style.animation = animCode;
    }
    if(lightVal == 3){
      var animCode = `slide ${0}s infinite`;
    var updateWorkpiece = document.getElementById("workpiece" + val) as HTMLInputElement
    var updateLaser = document.getElementById("laser" + val) as HTMLInputElement
    var updateMachineBackground = document.getElementById("workbench" + val) as HTMLInputElement
    updateLaser.classList.remove("glowing-line");
    updateMachineBackground.style.background = `linear-gradient(to bottom, #b7cee3 0%, #557484 100%, #004a65 117%)`;
    updateWorkpiece.style.animation = animCode;
    }
    if(lightVal == 0){
    var updateWorkpiece = document.getElementById("workpiece" + val) as HTMLInputElement
    var updateLaser = document.getElementById("laser" + val) as HTMLInputElement
    var updateDullEffect = document.getElementById("noMachine" + val) as HTMLInputElement
    updateLaser.classList.remove("glowing-line");
    updateWorkpiece.classList.remove("rectangle");
    updateDullEffect.style.filter = `grayscale(80%)`;
    
    }
    })
    }
    
}
