import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers: [LoggingService]
})
export class NewAccountComponent {
// Need to add email and password here with accountAdded
@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

constructor(private loggingService: LoggingService) {}

onCreateAccount(accountName: string, accountStatus: string){
  this.accountAdded.emit({
    name: accountName,
    status: accountStatus
  });
  this.loggingService.logStatusChange(accountStatus);
}



}
