let custoProduto = 100;
let vendaProduto = 200;

if (custoProduto < 0 || vendaProduto < 0) {
  console.log('error');
}

else if (custoProduto >= 0 && vendaProduto >= 0) {
  let custoRealProduto = custoProduto * 1.2;
  vendaProduto = (vendaProduto - custoRealProduto) * 1000;
  console.log(vendaProduto);
}
