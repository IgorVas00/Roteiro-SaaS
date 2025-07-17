import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule]           // importa ngModel
})
export class AppComponent {

   aluno: Aluno = {nome: "", cpf: "", email: "",github: ""};
   alunoService = new AlunoService();

   gravar(a: Aluno): void {
     this.alunoService.gravar(a);
     this.aluno = {nome: "", cpf: "", email: "", github: ""};
  }
}
