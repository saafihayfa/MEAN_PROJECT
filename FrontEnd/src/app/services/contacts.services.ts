import { Injectable } from '@angular/core';
import { contacts } from '../model/contact.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})


export class ContactsService {



  constructor(private http : HttpClient) {

  }

  listerContact(): Observable<contacts[]>{
    const apiURL ='http://localhost:5000/api/contacts/allcontacts' ;
    return this.http.get<contacts[]>(apiURL);
    }

  ajouterContact( c: contacts):Observable<contacts>{
      const url = 'http://localhost:5000/api/contacts/addcontact'
      return this.http.post<contacts>(url, c);
      }

  supprimerContact(_id : number){
      const url =  `http://localhost:5000/api/contacts/deleteContact/${_id}`;
      return this.http.delete( url);
        }

  consulterContact(_id: number):Observable<contacts>{
          const url =  `http://localhost:5000/api/contacts/getOneContact/${_id}`;
          return this.http.get<contacts>(url);
            }


  modifierContact(c : contacts) : Observable<contacts>{
          const url = `http://localhost:5000/api/contacts/updateContact/${c._id}` ;
          return this.http.put<contacts>(url,c);
            }


  }
