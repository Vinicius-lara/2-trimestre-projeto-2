const nomes = ["Vinícius Lara", "Gustavo Sarote", "Bruno Souza", "Davi Lucas", "Victor", "Rafael Rotulo", "Joabe"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
