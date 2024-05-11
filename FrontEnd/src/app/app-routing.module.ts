import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AjoutContactComponent } from './ajout-contact/ajout-contact.component';
import { ModifContactComponent } from './modif-contact/modif-contact.component';

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "contacts", component: ContactsComponent },
  { path: "ajout_contact", component: AjoutContactComponent },
  { path: "modif_contact/:_id", component: ModifContactComponent },




  {path: "", redirectTo: "accueil", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
