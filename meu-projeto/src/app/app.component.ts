import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { Funcionario } from './models/funcionario.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Meu Projeto';
  funcionarios: Funcionario[] = [
    {
      id: 1,
      nome: "Selia Selenium",
      idade: "20 anos",
      cargo: "QA Analyst"
    },
    {
      id: 2,
      nome: "Rannyer Rios",
      idade: "20 anos",
      cargo: "QA Analyst"
    },
    {
      id: 3,
      nome: "João Silva",
      idade: "30 anos",
      cargo: "Desenvolvedor"
    }
  ]

  

  mudarTitulo() {
    this.title = 'PAGINA WEB';
  }
}
