import { Component } from '@angular/core';
import { ApiCepService } from '../api-cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {
  address: any;

  constructor(private apiCepService: ApiCepService) { }

  onCepInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const cep = inputElement.value;

    if (cep.length === 8) {
      this.apiCepService.getCepInfo(cep).subscribe(
        data => this.address = data,
        error => console.error('Erro ao buscar o CEP', error)
      );
    }
  }
}
