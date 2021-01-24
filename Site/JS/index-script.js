//Função para carregar o XMLHttpRequest

function loadDoc(){ 
	var listaprodutos = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status==200){
			//alert("Recebi!");
			listaprodutos = this.responseText;
			gerarProdutos(listaprodutos);
		}	
	};
	xhttp.open("GET","https://api.polijunior.com.br/produtos",true);
	xhttp.send();
}

//Função para gerar as caixas de produtos
function gerarProdutos(string){
	obj = JSON.parse(string);
	size = obj.length;
	//alert(size);
	html_string='<h3 class="categoria-titulo">Cápsulas</h3>';
	for(i=0;i<size;i++){
		html_string+='<div class="caixa-prod">';
		html_string+='<div class="fundo-branco"></div>';
		html_string+='<div class="inten-prod">Intensidade: '+String(obj[i].intensidade)+'</div>';
		html_string+='<img class="imagem-prod" src="'+String(obj[i].foto)+'"/>';
		html_string+='<div class="nome-prod">'+String(obj[i].nome)+'</div>';
		html_string+='<div class="descr-prod">'+String(obj[i].descricao)+'</div>';
		html_string+='<div class="preco-prod">R$'+String(obj[i].preco)+'</div>';
		html_string+='<a class="carrinho-prod" style="inherit" href="#a">Adicionar ao carrinho de compras</a>';
		html_string+='</div>';
		
	}
	document.getElementById("container-produtos").innerHTML = html_string;
}
loadDoc();