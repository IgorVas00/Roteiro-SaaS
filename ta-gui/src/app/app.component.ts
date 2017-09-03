import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]           // importa ngModel
})
export class AppComponent {

   aluno: Aluno = {nome: "", cpf: "", email: "",github: ""};
   alunoService = new AlunoService();
   alunos: Aluno[] = [];

   gravar(a: Aluno): void {
     if (this.alunoService.gravar(a)) {
       this.alunos.push(a);
       this.aluno = {nome: "", cpf: "", email: ""};
     } else {
       this.aluno.cpf = "";
     }
  }
}
