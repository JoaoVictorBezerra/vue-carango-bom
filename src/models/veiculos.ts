import type { IVeiculo } from '@/components/interfaces/IVeiculo';

export function criarVeiculo(modelo: string, ano: number, valor: number, imagemUrl: string, marcaId: string) : IVeiculo {
    return {
        modelo,
        ano,
        valor,
        imagemUrl,
        marcaId
    }
}