import { Component, Input } from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() funcionario!: Funcionario;
}
