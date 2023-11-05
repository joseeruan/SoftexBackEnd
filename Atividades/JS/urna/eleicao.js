function urna () {
let vencedor, confirmar, voto;
let pontuacao = {
    X: 0,
    Y: 0,
    Z: 0,
    B: 0,
    N: 0
}
do {
    voto = parseInt(prompt('Candidatos: \n- candidato_X: 889  \n- candidato_Y: 847 \n- candidato_Z: 515 \n- branco: 0 \n Você deseja votar em quem?'));
    while (isNaN(voto)) {
        alert('Digite um número válido.')
        voto = parseInt(prompt ('Você deseja votar em quem?' ));
    }
    if (voto === 889) {
        pontuacao.X++;
        alert('Você votou no candidato X')
    }
    else if (voto === 847 ) {
        pontuacao.Y++;
        alert ('Você votou no candidato Y')
    }
    else if (voto === 515) {
        alert('Você votou no candidato Z')
        pontuacao.Z++;
    }
    else if (voto === 0){
        alert('Você votou em branco')
        pontuacao.B++;
        pontuacao.N++;
    }
    else {
        alert('Você votou em nulo')
        pontuacao.N++;
    }
    confirmar = prompt('Responda com Sim/Não. Você deseja finalizar a votação? ')
} while(confirmar.toLowerCase() != 'sim')

if (pontuacao.X > pontuacao.Y && pontuacao.X > pontuacao.Z) {
        vencedor = 'O vencedor foi o candidato X.'
}
else if (pontuacao.Z > pontuacao.Y && pontuacao.Z > pontuacao.X) {
        vencedor = 'O vencedor foi o candidato Z.'
}
else if (pontuacao.Y > pontuacao.X && pontuacao.Y > pontuacao.Z) {
        vencedor = 'O vencedor foi o candidato Y.'
}
else if (pontuacao.N > pontuacao.X && pontuacao.N > pontuacao.Y && pontuacao.N > pontuacao.Z) {
        vencedor = 'A eleição foi anulada!';
}
else {
      vencedor = 'A eleição deu empate. Vamos para o segundo turno!'
}
    if (confirmar.toLowerCase() === 'sim') {
        alert('VOTO CONFIRMADO!')
        alert(vencedor);
        alert('Quantidade de votos de cada candidato: \n\n' + 'Votos no candidato X: ' + pontuacao.X + '\nVotos no candidato Y: ' + pontuacao.Y + '\nVotos no candidato Z: ' + pontuacao.Z + '\nVotos no candidato B: ' + pontuacao.B + '\nVotos nulos: ' + pontuacao.N);
    }
}