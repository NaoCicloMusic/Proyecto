import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageServices } from '../../services/message-services';
import { Message } from '../../modules/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-message',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-message.html',
})
export class CreateMessage {
  private messageService = inject(MessageServices);
  private router = inject(Router);

  nuevoMensaje: Message = {
    name: '',
    content: '',
    imageUrl: ''
  };

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.nuevoMensaje.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    this.messageService.guardarMensaje(this.nuevoMensaje).subscribe({
      next: () => {
        alert('¡Mensaje guardado con éxito!');
        this.router.navigate(['/ShowMessage']);
      },
      error: (err) => console.error('Error al guardar:', err)
    });
  }
}