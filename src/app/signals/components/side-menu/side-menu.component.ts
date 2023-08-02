import { Component, signal } from '@angular/core';

interface MenuItem{
  title: string;
  route: string;
}
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
    { title: 'contador', route: 'counter'},
    { title: 'usuario', route: 'user-info'},
    { title: 'mutaciones', route: 'properties'}
  ]);

  // forma tradicional
  // public menuItems: MenuItem[] = [
  //   { title: 'contador', route: 'counter'},
  //   { title: 'usuario', route: 'user-info'},
  //   { title: 'mutaciones', route: 'properties'},
  // ]

}
