import type { IMarca } from "@/interfaces/IMarca"

export function criarMarca(nome: string) : IMarca {
    return {
        nome
    }
}