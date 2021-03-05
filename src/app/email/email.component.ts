import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_6ukhy8t', 'template_bkyb1jm', e.target as HTMLFormElement, 'user_XxO7co8c7nZ6OMTJViJPQ')
      .then((result: EmailJSResponseStatus) => {
        this.showToaster(true);
        console.log(result.text);
      }, (error) => {
        this.showToaster(false);
        console.log(error.text);
      });
  }

  showToaster(isSuccessful: boolean) {
    if(isSuccessful){
      this.toastr.success("Message has been sent succesfully");
    }
    else{
      this.toastr.error("Message did not send successfully.");
    } 
  }
}