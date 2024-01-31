let fotoPersonagem = document.querySelector(".foto")

let personagemUm = document.querySelector(".luffy")
let personagemDois = document.querySelector(".zoro")
let personagemTres = document.querySelector(".mihawlk")
let personagemQuatro = document.querySelector(".oden")
let personagemCinco = document.querySelector(".yamato")

let titulo = document.querySelector(".tituloPersonagem")
let descricao = document.querySelector(".sobrePersonagem")



personagemUm.addEventListener("click", () => {
    fotoPersonagem.style.opacity = "0"; 
    titulo.style.opacity = "0";
    descricao.style.opacity = "0";

    setTimeout(() => {
        
        fotoPersonagem.src = "/assets/img/luffy.jpg";
        titulo.innerHTML = "Luffy";
        descricao.innerHTML = "Luffy, o protagonista de 'One Piece', é um jovem pirata carismático e destemido. Com o sonho de se tornar o Rei dos Piratas, ele lidera os Piratas do Chapéu de Palha em busca do tesouro lendário, o One Piece. Sua habilidade única de esticar o corpo como borracha e sua natureza otimista tornam-no um personagem adorado por fãs de todo o mundo.";
        

        fotoPersonagem.style.opacity = "1";
        titulo.style.opacity = "1";
        descricao.style.opacity = "1";
    }, 500);
});


personagemDois.addEventListener("click", () => {
    fotoPersonagem.style.opacity = "0"; 
    titulo.style.opacity = "0";
    descricao.style.opacity = "0";

    setTimeout(() => {
        fotoPersonagem.src = "/assets/img/zoro.jpg"
        titulo.innerHTML = "Zoro"
        descricao.innerHTML = "Zoro, o espadachim dos Piratas do Chapéu de Palha em 'One Piece', almeja se tornar o melhor espadachim do mundo. Com sua personalidade séria e lealdade inabalável a Luffy, ele é um membro indispensável da tripulação. Suas habilidades de três espadas e determinação feroz fazem dele um guerreiro formidável, contribuindo para as aventuras emocionantes dos Piratas do Chapéu de Palha."

        fotoPersonagem.style.opacity = "1";
        titulo.style.opacity = "1";
        descricao.style.opacity = "1";
    }, 500)
   
})

personagemTres.addEventListener("click", () => {
    fotoPersonagem.style.opacity = "0"; 
    titulo.style.opacity = "0";
    descricao.style.opacity = "0";

    setTimeout(() => {
        fotoPersonagem.src = "/assets/img/mihawlk.jpg"
        titulo.innerHTML = "Mihawlk"
        descricao.innerHTML = "Mihawk, o 'Melhor Espadachim do Mundo' em 'One Piece', é um mestre da espada com habilidades inigualáveis. Com sua elegância e presença imponente, ele é uma figura temida e respeitada. Vivendo em uma ilha isolada, Kuraigana, Mihawk mantém uma relação intrigante com Zoro, um aspirante a espadachim. Seu título como um dos Shichibukai adiciona uma camada de complexidade ao enredo, tornando-o um personagem cativante no mundo de 'One Piece'."
    
        fotoPersonagem.style.opacity = "1";
        titulo.style.opacity = "1";
        descricao.style.opacity = "1";
    }, 500)
})

personagemQuatro.addEventListener("click", () => {
    fotoPersonagem.style.opacity = "0"; 
    titulo.style.opacity = "0";
    descricao.style.opacity = "0";

    setTimeout(() => {
        fotoPersonagem.src = "/assets/img/oden.jpg"
        titulo.innerHTML = "Oden"
        descricao.innerHTML = "Oden, também conhecido como Kozuki Oden, é uma figura lendária em 'One Piece'. Ele foi o antigo daimyo de Kuri, conhecido por sua força, coragem e paixão pela aventura. Sua notável habilidade com a espada e a determinação em alcançar seus objetivos deixaram uma marca duradoura no mundo. Oden desempenhou um papel crucial na história de Wano, influenciando gerações futuras e sendo lembrado como um herói. Sua jornada e sacrifícios adicionam profundidade e significado à narrativa de 'One Piece'."
    
        fotoPersonagem.style.opacity = "1";
        titulo.style.opacity = "1";
        descricao.style.opacity = "1";
    }, 500)
})

personagemCinco.addEventListener("click", () => {
    fotoPersonagem.style.opacity = "0"; 
    titulo.style.opacity = "0";
    descricao.style.opacity = "0";

    setTimeout(() => {
        fotoPersonagem.src = "/assets/img/yamato.jpg"
        titulo.innerHTML = "Yamato"
        descricao.innerHTML = "Yamato é um personagem intrigante em 'One Piece', apresentado como filho de Kaido, o Yonko. Apesar de sua relação com um dos vilões principais, Yamato revela uma forte admiração por Oden Kozuki e se identifica como um 'Oden masculino'. Vestindo uma máscara, Yamato demonstra habilidades de combate impressionantes e um desejo de seguir os passos do lendário Oden. Sua presença misteriosa adiciona um elemento intrigante à narrativa, enquanto sua conexão com a história de Wano continua a se desdobrar."

        fotoPersonagem.style.opacity = "1";
        titulo.style.opacity = "1";
        descricao.style.opacity = "1";

    }, 500)
  
})