import { Component } from '@angular/core';
import { CustomNavbarComponent } from '../../components/custom-navbar/custom-navbar.component';
import { NgForOf, NgIf } from '@angular/common';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';
import { RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Admin {
  id: number;
  nom: string;
  prenom:string;
  email: string;
  isActive: boolean;
}
@Component({
  selector: 'app-regie-list',
  standalone: true,
  imports: [
    CustomNavbarComponent,
    NgForOf,
    SidenavComponent,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './regie-list.component.html',
  styleUrl: './regie-list.component.css'
})



export class RegieListComponent {
  admins: Admin[] = [
    { id: 1, nom: 'Admin 1',prenom:'', email: 'admin1@example.com', isActive: false },
    { id: 2, nom: 'Admin 2',prenom:'', email: 'admin2@example.com', isActive: false },
    // Ajouter plus d'administrateurs si nécessaire
  ];

  toggleStatus(id: number): void {
    const admin = this.admins.find(admin => admin.id === id);
    if (admin) {
      admin.isActive = !admin.isActive;
    }
  }

  deleteAdmin(id: number): void {
    this.admins = this.admins.filter(admin => admin.id !== id);
  }
}
