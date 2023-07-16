# Lista de compras

Página web: <https://jailcomfranssa.github.io/javascript-lista_de_compras/>


<img src="https://github.com/jailcomfranssa/javascript-lista_de_compras/blob/main/img/listaCompras.png" width="500" />

<div style="display: inline_block" align="center">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
    <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/>
    <img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white"/> 
    
</div>

### Código Javascript:
~~~javascript

var items = []
var btn_submit = document.querySelector('.btn-primary')
var limpar = document.querySelector('.btn-warning')


btn_submit.addEventListener('click', (event) => {
    event.preventDefault();
    var nome_produto = document.querySelector('input[name=nome_produto]')
    var preco_produto = document.querySelector('input[name=preco_produto]')

    items.push({
        nome: nome_produto.value,
        valor: preco_produto.value
    })


    let list_group = document.querySelector('.list-group')
    let soma = 0
    list_group.innerHTML = ""
    items.map(function (val, indice) {
        soma += parseFloat(val.valor)
        list_group.innerHTML += `
        <li class="list-group-item "><span class="ms-0 ms-lg-2 h3">`+ val.nome + `</span> <span class="ms-0 ms-lg-5 badge text-bg-success valor-tamanho">R$:` + val.valor + `</span>
        <span>  <button class="btn btn-outline-danger remover" onclick="removerItem(${indice} )"> <i class="bi bi-trash3"></i> Remover </button> </span>
        </li>
        `

    })

    soma = soma.toFixed(2)
    nome_produto.value = ""
    preco_produto.value = ""

    let total = document.querySelector('.card-footer')
    total.innerHTML = "Total - R$: " + soma

})



limpar.addEventListener('click', () => {
    items = [];
    document.querySelector('.list-group').innerHTML = ""
    document.querySelector('.card-footer').innerHTML = "Total - R$: 0.00"
})


function removerItem(indice) {

    items.splice(indice, 1)

    let list_group = document.querySelector('.list-group');
    let soma = 0;
    list_group.innerHTML = ''
    items.map(function (val, indice) {
        soma += parseFloat(val.valor)
        list_group.innerHTML += `
        <li class="list-group-item">
            <span class="ms-0 ms-lg-2 h3">${val.nome}</span>
            <span class="ms-0 ms-lg-5 badge text-bg-success valor-tamanho">R$:${val.valor}</span>
            <span> <button class="btn btn-outline-danger remover" onclick="removerItem(${indice})"> <i class="bi bi-trash3"></i> Remover </button>
            </span>
        </li>
    `
    });

    soma = soma.toFixed(2);
    let total = document.querySelector('.card-footer');
    total.innerHTML = 'Total - R$: ' + soma;
}
 
~~~
