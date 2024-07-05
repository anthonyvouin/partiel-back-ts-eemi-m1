export interface UserProps {
  nom: string;
  prenom: string;
  dateNaissance: Date;
  adresse: string;
  contactTelephonique: Number;
  email: string;
  responsableLegal?: string;
  dateCreation: Date; 
}
