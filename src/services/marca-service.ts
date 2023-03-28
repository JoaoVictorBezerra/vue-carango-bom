const token = sessionStorage.getItem('token');

export function listarMarcas() {
  return fetch('http://localhost:3000/api/marcas').then((resposta) => {
    if(resposta.status === 200) {
      return resposta.json()
    } else {
      return
    }
  })
}

export function salvarMarca(marca: string) : Promise<void> {
  return fetch('http://localhost:3000/api/marcas', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({'nome': marca})
  })
  .then((resposta) => {
    if(resposta.status == 201) {
      return resposta.json()
    }
  })
}