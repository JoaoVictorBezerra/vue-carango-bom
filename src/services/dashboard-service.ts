
export function listaIndicadoresMarcas(): Promise<Record<string, any>> {
  const token = sessionStorage.getItem('token');
  const options = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch('http://localhost:3000/api/dashboard', options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Erro:', error);
    });
}
