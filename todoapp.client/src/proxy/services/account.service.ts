import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateAccountDto } from '../interfaces/create-account-dto';
import { environment } from '../../environment/environmentUrl';

const url = environment.baseUrl
const headers: HttpHeaders = new HttpHeaders()
  .set('Content-Type', 'application/json, charset=utf-8');
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(account: CreateAccountDto){
    var body = JSON.stringify(account);
    return this.http.post<any>(`${url}/Account/create`, body, {headers})
  }
}
