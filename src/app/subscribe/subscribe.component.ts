import { Component, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent{
@Input() flag:boolean;

@Output() close = new EventEmitter<void>();


  onSubmit(form : NgForm){
    // remove console line when logic is in place. For test purpose remove close.emit() when checking for vlaue in console
    console.log(form);
    const value = form.value;
    this.close.emit();

  }

  onClose(){
    this.close.emit();
  }
}
