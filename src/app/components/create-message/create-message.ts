import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para el formulario
import { MessageServices } from '../../services/message-services';
import { Message } from '../../modules/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [FormsModule], // Agregamos FormsModule
  templateUrl: './create-message.html',
})
export class CreateMessage {
  private messageService = inject(MessageServices);
  private router = inject(Router);

  // Objeto que se vincula al formulario
  nuevoMensaje: Message = {
    name: '',
    content: '',
    imageUrl: ''
  };

  onSubmit() {
    this.messageService.guardarMensaje(this.nuevoMensaje).subscribe({
      next: () => {
        alert('¡Mensaje guardado con éxito!');
        this.router.navigate(['/mostrar-mensajes']); // Te manda a la lista automáticamente
      },
      error: (err) => console.error('Error al guardar:', err)
    });
  }
}