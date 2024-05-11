import { Component } from '@angular/core';
import { contacts } from '../model/contact.model';
import { Router } from '@angular/router';
import { ContactsService } from '../services/contacts.services';


@Component({
  selector: 'app-ajout-contact',
  templateUrl: './ajout-contact.component.html',
  styleUrl: './ajout-contact.component.css'
})
export class AjoutContactComponent  {

  NewContact  = new contacts () ;

  constructor(private ContactsService: ContactsService, private router : Router ) { }

  ngOnInit(): void {
  }


  addContact(){
    this.ContactsService.ajouterContact(this.NewContact)
    .subscribe(c=> {
    console.log(c);
    });
    this.router.navigate(['contacts']);
    }

}
