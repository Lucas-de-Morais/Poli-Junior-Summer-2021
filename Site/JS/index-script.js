
//Função para carregar o XMLHttpRequest
function loadDoc(){ 
	var listaprodutos = [];
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status==200){
			
			//---Teste----
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
	var preco = 0;
	
	//---Teste----
	//alert(size);
	//html_string='<h3 class="categoria-titulo">Cápsulas</h3>';
	
	//Título do mostruário
	categoriaTitulo = document.createElement("H3");
	categoriaTitulo.className = "categoria-titulo";
	categoriaTitulo.innerHTML = "Cápsulas";
	
	//Container do mostruário dos produtos
	caixaMaster = document.getElementById("container-produtos");
	caixaMaster.innerHTML = "";
	
	//Adição do título ao mostruário
	caixaMaster.appendChild(categoriaTitulo);
	
	for(i=0;i<size;i++){
		
		//Conversão do valor do preço para formatação monetária
		preco = Number(obj[i].preco);
		preco = preco.toFixed(2);
		preco = preco.replace(".",",")
		
		//Caixa que contém todas as informaçõe de cada produto
		caixaProd = document.createElement("DIV");
		caixaProd.className="caixa-prod";
		
		//Fundo branco atrás da imagem do produto
		fundoBranco = document.createElement("DIV");
		fundoBranco.className="fundo-branco";
		
		//Intensidade da cápsula de café
		intensidadeProd = document.createElement("DIV");
		intensidadeProd.className="inten-prod";
		intensidadeProd.innerHTML = ('Intensidade: '+String(obj[i].intensidade));
		
		//Imagem do produto
		imagemProd = document.createElement("IMG");
		imagemProd.className="imagem-prod";
		imagemProd.src = String(obj[i].foto);
		imagemProd.alt = "imagem do produto";
		
		//Nome do Produto
		nomeProd = document.createElement("DIV");
		nomeProd.className="nome-prod";
		nomeProd.innerHTML = String(obj[i].nome);
		
		//Descrição do Produto
		descrProd = document.createElement("DIV");
		descrProd.className="descr-prod";
		descrProd.innerHTML = String(obj[i].descricao);
		
		//Preço do Produto
		precoProd = document.createElement("DIV");
		precoProd.className="preco-prod";
		precoProd.innerHTML = "R$"+String(preco);
		
		//Link para o Carrinho de Compras
		carrinhoProd = document.createElement("A");
		carrinhoProd.className="carrinho-prod";
		carrinhoProd.href="javascript:void(0)";
		carrinhoProd.innerHTML = "Adicionar ao carrinho de compras";
		
		//Adição dos DIVs dentro da Caixa de Produto
		caixaProd.appendChild(fundoBranco);
		caixaProd.appendChild(intensidadeProd);
		caixaProd.appendChild(imagemProd);
		caixaProd.appendChild(nomeProd);
		caixaProd.appendChild(descrProd);
		caixaProd.appendChild(precoProd);
		caixaProd.appendChild(carrinhoProd);
		
		//Adição da caixa de Produto dentro do container do mostruário
		caixaMaster.appendChild(caixaProd);
		
		//---------------Teste--------------------
		//html_string+='<div class="caixa-prod">';
		//html_string+='<div class="fundo-branco"></div>';
		//html_string+='<div class="inten-prod">Intensidade: '+String(obj[i].intensidade)+'</div>';
		//html_string+='<img class="imagem-prod" src="'+String(obj[i].foto)+'"/>';
		//html_string+='<div class="nome-prod">'+String(obj[i].nome)+'</div>';
		//html_string+='<div class="descr-prod">'+String(obj[i].descricao)+'</div>';
		//html_string+='<div class="preco-prod">R$'+String(preco)+'</div>';
		//html_string+='<a class="carrinho-prod" style="inherit" href="#a">Adicionar ao carrinho de compras</a>';
		//html_string+='</div>';
		
	}
	//--------Teste-----------------------
	//caixaMaster.innerHTML = html_string;
}

loadDoc();