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
    items.map(function(val){
        soma+=parseFloat(val.valor)
        list_group.innerHTML+=`
        <li class="list-group-item "><span class="ms-0 ms-lg-2">`+ val.nome +`</span> <span class="ms-0 ms-lg-5 badge text-bg-success">R$:`+ val.valor +`</span></li>
        
        `
    })

    soma = soma.toFixed(2)
    nome_produto.value = ""
    preco_produto.value = ""
    
    let total = document.querySelector('.card-footer')
    total.innerHTML = "Total - R$: "+ soma

})

limpar.addEventListener('click', ()=>{
    items = [];
    document.querySelector('.list-group').innerHTML = ""
    document.querySelector('.card-footer').innerHTML = "Total - R$: 0.00"
})

/*
button[name=limpar]
*/
