import { defineStore } from 'pinia';

export const useUsuarioStore = defineStore('usuario', {
  state: () => ({
    usuario: {
      email: '',
      nome: '',
      logado: false,
    },
  }),
  actions: {
    limpa() {
      this.usuario.email = '';
      this.usuario.nome = '';
    },
  },
});
