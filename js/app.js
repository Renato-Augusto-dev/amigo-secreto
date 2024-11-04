let amigos = [];


function adicionar(){
    let amigo = document.querySelector('#nome-amigo').value;
    let listaAmigo = document.querySelector('#lista-amigos');


    if(amigo == ''){
        alert('Informe o nome do amigo');
        return;
    }
    if(amigos.includes(amigo)){
        alert('Nome já adicinado');
        return;
    }

    amigos.push(amigo);

    listaAmigo.textContent == '' ? listaAmigo.textContent += amigo : listaAmigo.textContent += `,${amigo} `;

   document.querySelector('#nome-amigo').value = ''; 


}
function sortear(){
    if(amigos.length <= 4){
        alert('Adiciona pelo menos 4 amigos');
        return;
    }

    let sorteio = document.querySelector('#lista-sorteio');

    embaralha(amigos);

    if(sorteio.innerHTML == ''){
        for(let i = 0; i < amigos.length; i++){
            if(i == amigos.length - 1){
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>';
            }else{
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>';
            }
            
        }
    }else{
        sorteio.innerHTML = '';
    }
    

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}
function reiniciar(){
    amigos = [];
    document.querySelector('#nome-amigo').innerHTML = '';
    document.querySelector('#lista-amigos').innerHTML = '';
    document.querySelector('#lista-sorteio').innerHTML = '';
}

