import type { IVeiculo } from '@/interfaces/IVeiculo';

export function salvarVeiculo(payload: IVeiculo): Promise<void> {
  const token = sessionStorage.getItem('token');
  return fetch('http://localhost:3000/api/veiculos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
    .then((resposta) => {
      if (resposta.status == 201) {
        resposta.json();
      }
    })
    .catch((erro) => {
      Promise.reject(erro);
    });
}

export function listarVeiculos() {
  return fetch('http://localhost:3000/api/veiculos')
    .then((resposta) => {
      if (resposta.status == 200) {
        return resposta.json();
      }
    })
    .catch((erro) => {
      Promise.reject(erro);
    });
}

export function deletarVeiculo(veiculoId: string): Promise<void> {
  const token = sessionStorage.getItem('token');
  return fetch(`http://localhost:3000/api/veiculos/${veiculoId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((erro) => {
      Promise.reject(erro);
    });
}
