import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
        "id": "t1",
        "userId": "u1",
        "title": "Implementar solução simples de segurança de rede",
        "summary": "Implementar VLAN na LAN e definir máscara de rede proporcional aos hosts e configurar o servidor DHCP para distribuir endereços IPs somente no range definido. Garantir roteamento entre as VLANS através de trunk no switch layer 3",
        "dueDate": "2025-12-31"
    },
    {
        "id": "t2",
        "userId": "u3",
        "title": "CI/CD - Implementar pipelines quando feito merge requests no GitLab",
        "summary": "Configurar arquivo .yml para executar todos os 'Casos de Testes' de todas as 'Suítes de Testes' para garantir a integridade e confiabilidade do software, evitando falhas e garantindo sua robustez.",
        "dueDate": "2024-05-31"
    },
    {
        "id": "t3",
        "userId": "u3",
        "title": "Configuração de 'Tempo de Validade' das Chaves de VPN de usuários colaboradores",
        "summary": "Impelementar alertas de expiração através de envio de e-mail para o colaborador renovar ou não, e definir revogação automática da chave conforme a nossa 'Política de Segurança'.",
        "dueDate": "2024-06-15"
    }
]


  
  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}