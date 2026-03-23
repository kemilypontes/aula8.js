const produto = ["Álbum Proof",
"Lightstick oficial ARMY Bomb" ,
"Camiseta oficial BTS com logo do grupo", 
"Boné Love Yourself",
"Mochila BTS com patch dos integrantes",  
"Pôster oficial da turnê Map of the Soul",
"Photocard set dos membros", 
"Pulseira BTS com pingente do logo", 
"Caderno temático Butter", 
"Capinha de celular personalizada com o nome do integrante favorito"]
const valores = [250.00 , 400.00 , 120.00 , 100.00 , 180.00 , 50.00 , 60.00, 40.00, 30.00 , 50.00]

let contador = 0 
while(contador <= 10){ 
    console.log(produto[contador] + " - " + valores[contador] + ",00")
    contador = contador + 1 
}
produto.push("Moletom oficial BTS Permission to Dance")
valores.push(200)
