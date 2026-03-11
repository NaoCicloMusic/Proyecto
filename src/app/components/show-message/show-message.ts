import { Component, OnInit, inject } from '@angular/core';
import { Message } from '../../modules/message';
import { MessageServices } from '../../services/message-services'; // <-- Ruta corregida

@Component({
  selector: 'app-show-message',
  standalone: true,
  templateUrl: './show-message.html', // <-- Nombre de archivo corregido
  styleUrl: './show-message.css'      // <-- Nombre de archivo corregido
})
export class ShowMessage implements OnInit {
  private messageService = inject(MessageServices);

  messages: Message[] = [];
  error = '';

  ngOnInit(): void {
    console.log('1. Iniciando petición al backend...');
    
    this.messageService.listarMensajes().subscribe({
      next: (response: Message[]) => { // <-- Le decimos explícitamente que es un arreglo de Mensajes
        console.log('2. ¡Éxito! Datos recibidos:', response);
        this.messages = response;
      },
      error: (err: any) => { // <-- Le decimos que el error puede ser cualquier cosa (any)
        console.error('2. Error en la petición:', err);
        this.error = 'No se pudieron cargar los mensajes. Revisa si el backend (Spring) está encendido.';
      },
    });
  }
}