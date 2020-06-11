import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient';
import { SharedserviceService } from '../sharedservice.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  
  public patient: Patient;
  public treatment: string;
  constructor(
    private shared_data_service: SharedserviceService
  ) 
  {
    
  }


  ngOnInit(): void {
    this.patient = new Patient();
    this.treatment = '';
  }
  callTreatment()
  {
      this.treatment = "use paracetamol";
      this.getLatLong();
  }
  clearAll()
  {
    this.patient = new Patient();
  }
  getLatLong() {
    this.shared_data_service.getLatLong<any>(this.patient.country,this.patient.state,this.patient.city).subscribe(
      data => {
        console.log(data);
        this.treatment = data.results[0].locations[0].latLng.lat;
        this.treatment = this.treatment + " " + data.results[0].locations[0].latLng.lng;
      },
      error => () => {
      }
    );
  }
}
