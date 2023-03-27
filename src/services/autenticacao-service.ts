export function autentica(
  email: string,
  senha: string,
  store: any
): Promise<any> {
  const credenciais = { email, senha };

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(credenciais),
  };

  return fetch('http://localhost:3000/api/login', options)
    .then((resposta) => resposta.json())
    .then((resposta) => {
      sessionStorage.setItem('token', resposta.dados.token);
      store.usuario = resposta.dados.usuario;

      return resposta.dados.usuario;
    })
    .catch((erro) => {
      return Promise.reject(erro.mensagem);
    });
}
