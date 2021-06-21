import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-final';
  showFiller = true;
  listItem = [
    { value: 'option-1', label: 'Home', icon: 'fas fa-home', href: '/home' },
    {
      value: 'option-2',
      label: 'Product',
      icon: 'fab fa-phoenix-squadron',
      href: '/product',
    },
    {
      value: 'option-3',
      label: 'About',
      icon: 'fas fa-binoculars',
      href: '/about',
    },
    {
      value: 'option-4',
      label: 'Setting',
      icon: 'fas fa-cog',
      href: '/setting',
    },
    {
      value: 'option-5',
      label: 'Contact',
      icon: 'fas fa-phone-square-alt',
      href: '/contact',
    },
  ];
}
