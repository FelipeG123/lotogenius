function gerarNumero() {
    const numero = Math.floor(Math.random() * 100) + 1; // Gera número entre 1 e 100
    document.getElementById('resultado').innerText = "Número gerado: " + numero;
}
