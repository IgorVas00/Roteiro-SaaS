import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]           // importa ngModel
})
export class AppComponent {
  aluno: Aluno = {nome: '', cpf: '', email: '', github: ''};

}

export class Aluno {
  nome: string = '';
  cpf: string = '';
  email: string = '';
  github: string = '';
}
