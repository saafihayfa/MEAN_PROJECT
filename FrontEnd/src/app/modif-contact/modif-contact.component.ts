import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.services';
import { contacts } from '../model/contact.model';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-modif-contact',
  templateUrl: './modif-contact.component.html',
  styleUrl: './modif-contact.component.css'
})
export class ModifContactComponent {
  NewContact  = new contacts () ;

  constructor(private ContactsService: ContactsService,
    private router : Router,
    private ActivatedRoute: ActivatedRoute)
{ }

ngOnInit(): void {

  this.ContactsService.consulterContact(this.ActivatedRoute.snapshot.params['_id']).
  subscribe( cont =>{ this.NewContact = cont; } ) ;

}
modifcontact() {
  this.ContactsService.modifierContact(this.NewContact)
  .subscribe( t=> {
  alert ("contact modifié ");
  console.log(t);
  this.router.navigate(['contacts']);
  },
  err => { alert("Problème lors de la modification !");}
  );
  }
}
