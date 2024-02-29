import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
