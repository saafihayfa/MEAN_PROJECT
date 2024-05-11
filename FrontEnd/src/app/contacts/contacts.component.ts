import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.services';
import { contacts } from '../model/contact.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  cont !:contacts[] ;

  constructor(private ContactsService: ContactsService,  private router : Router ) {



    }

   ngOnInit(): void {

     this.ContactsService.listerContact().subscribe( data => {
       this.cont=data
       console.log(data);
       } );

   }

   supprimContact(c: contacts)
   {
       let conf = confirm("Etes-vous sûr de supprimer ce contact?");
        if (conf)
            this.ContactsService.supprimerContact(c._id).subscribe(() => {
                console.log(" Contact supprimé");
                alert("Contact supprimé");
                this.SupprimContactDuTableau(c);
               });
             }

    SupprimContactDuTableau(c: contacts) {
        this.cont.forEach((cur, index) => {
                  if(c._id===cur._id) {
                      this.cont.splice(index, 1);
                  }
              });
             }


}
