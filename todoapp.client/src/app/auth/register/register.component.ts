import { Component } from '@angular/core';
import { CreateAccountDto } from '../../../proxy/interfaces/create-account-dto';
import { AccountService } from '../../../proxy/services/account.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  newAccount: CreateAccountDto = {} as CreateAccountDto

  loading = false

  constructor (
    private accountService: AccountService,
    private messageService: MessageService

  ){}

  create(){
    console.log("clicked")
    console.log(this.newAccount)
       if(!this.newAccount.firstName || !this.newAccount.lastName || !this.newAccount.email || !this.newAccount.password || !this.newAccount.confirmPassword){
        this.messageService.add({
          severity: 'warning', 
          summary: 'Missing Fields', 
          detail: 'Fill out missing fields', 
          life: 3000})
       }else if(this.newAccount.confirmPassword != this.newAccount.password){
        this.messageService.add({
          severity: 'warning', 
          summary: 'Passwords Dont Match', 
          detail: 'Passwords dont match', 
          life: 3000})

       } else{
        this.loading = true
        this.accountService.createAccount(this.newAccount).subscribe((res) => {
          this.loading = false
          if(res.isSuccess){
            this.messageService.add({
              severity: 'success', 
              summary: 'Sucess', 
              detail: res.message, 
              life: 3000})

          }
        })
       }

  }

}
