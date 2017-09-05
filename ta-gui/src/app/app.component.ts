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
  imports: [FormsModule, CommonModule],
  providers: [AlunoService]  // aqui, registra o serviço para injeção
})
export class AppComponent {
   constructor(private alunoService: AlunoService) {}

   aluno: Aluno = new Aluno();
   alunos: Aluno[] = [];
   cpfduplicado: boolean = false;

   criarAluno(a: Aluno): void {
     if (this.alunoService.criar(a)) {
       this.alunos.push(a);
       this.aluno = new Aluno();
     } else {
       this.cpfduplicado = true;
     }
   }

   onMove(): void {
      this.cpfduplicado = false;
   }

   atualizarAluno(aluno: Aluno): void {
      this.alunoService.atualizar(aluno);
   }

}
