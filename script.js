// script.js
const button = document.getElementById('jogar');

// Lista de passagens bíblicas para exibição local
const verses = [
    "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento; reconheça o Senhor em todos os seus caminhos, e ele endireitará as suas veredas. - Provérbios 3:5-6 (NVI)",
    "Seja forte e corajoso. Não se apavore, nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. - Josué 1:9 (NVI)",
    "Os que confiam no Senhor são como o monte Sião, que não se pode abalar, mas permanece para sempre. - Salmo 125:1 (NVI)",
    "E eu estarei sempre com vocês, até o fim dos tempos. - Mateus 28:20b (NVI)",
    "Confie no Senhor, e faça o bem; assim você habitará na terra e desfrutará segurança. - Salmo 37:3 (NVI)",
    "Este é o dia em que o Senhor agiu; alegremo-nos e exultemos neste dia. - Salmo 118:24 (NVI)",
    "Como é bom e agradável quando os irmãos convivem em união! - Salmo 133:1 (NVI)",
    "O amigo ama em todos os momentos; é um irmão na adversidade. - Provérbios 17:17 (NVI)",
    "Ninguém tem maior amor do que aquele que dá a sua vida pelos seus amigos. - João 15:13 (NVI)",
    "Se um cair, o amigo pode ajudá-lo a levantar-se. Mas pobre do homem que cai e não tem quem o ajude a levantar-se! - Eclesiastes 4:10 (NVI)",
    "Eu sei que o meu Redentor vive, e que no fim se levantará sobre a terra. - Jó 19:25 (NVI)",
    "Deem graças ao Senhor porque ele é bom; o seu amor dura para sempre. - Salmo 118:1 (NVI)",
    "Pois eu bem sei os planos que estou projetando para vós, diz o Senhor; planos de paz, e não de mal, para vos dar o fim que desejais. - Jeremias 29:11 (NVI)",
    "Eu te louvarei de todo o meu coração; diante dos deuses a ti cantarei louvores. - Salmo 138:1 (NVI)",
    "Onde quer que fores, e eu for, a minha mão te guiará e minha mão direita te susterá. - Salmo 139:10 (NVI)",
    "O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei? - Salmo 27:1 (NVI)",
    "Em todo o tempo ama o amigo, e na angústia se faz o irmão. - Provérbios 17:17 (NVI)",
    "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria. - Salmo 90:12 (NVI)",
    "Portanto, não se preocupem com o amanhã, pois o amanhã se preocupará consigo mesmo. Basta a cada dia o seu próprio mal. - Mateus 6:34 (NVI)",
    "Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou. - Romanos 8:37 (NVI)",
    "Eu sou o bom pastor; conheço as minhas ovelhas e elas me conhecem. - João 10:14 (NVI)",
    "Pois o Senhor dá sabedoria, e da sua boca procedem o conhecimento e o entendimento. - Provérbios 2:6 (NVI)",
    "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. - João 14:6 (NVI)",
    "O Senhor é o meu pastor; nada me faltará. Em verdes pastagens me faz repousar e me conduz a águas tranquilas. - Salmo 23:1-2 (NVI)",
    "Pois tu, Senhor, és o meu refúgio! - Salmo 91:9a (NVI)",
    "Dêem e será dado a vocês: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem, também será usada para medir vocês. - Lucas 6:38 (NVI)",
    "Onde não há revelação divina, o povo se desvia; mas como é feliz quem obedece à lei! - Provérbios 29:18 (NVI)",
    "Bendiga o Senhor a minha alma! Não esqueça nenhuma de suas bênçãos! - Salmo 103:2 (NVI)",
    "Os justos clamam, e o Senhor os ouve; ele os livra de todas as suas tribulações. - Salmo 34:17 (NVI)",
    "Ele mesmo, o Senhor, irá à frente de você e estará com você; ele nunca o deixará, nunca o abandonará. Não tenha medo! Não desanime! - Deuteronômio 31:8 (NVI)",
    "Vinde a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. - Mateus 11:28 (NVI)",
    "Se Deus é por nós, quem será contra nós? - Romanos 8:31b (NVI)",
    "Eu e a minha casa serviremos ao Senhor. - Josué 24:15b (NVI)",
    "O justo passa por muitas adversidades, mas o Senhor o livra de todas. - Salmo 34:19 (NVI)",
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. - Números 6:24-26 (NVI)",
    "A bênção do Senhor traz riqueza e não inclui dor alguma. - Provérbios 10:22 (NVI)",
    "Eu sou o Senhor, o Deus de toda a humanidade. Existe alguma coisa difícil demais para mim? - Jeremias 32:27 (NVI)",
    "Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio. Contra essas coisas não há lei. - Gálatas 5:22-23 (NVI)",
    "Que o Deus da esperança os encha de toda alegria e paz, por sua confiança nele, para que vocês transbordem de esperança, pelo poder do Espírito Santo. - Romanos 15:13 (NVI)",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13 (NVI)",

    // Fé
    "Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. - Hebreus 11:1 (NVI)",
    "Pois vivemos por fé, e não pelo que vemos. - 2 Coríntios 5:7 (NVI)",
    "E tudo o que pedirem em oração, se crerem, vocês receberão. - Mateus 21:22 (NVI)",
    "Jesus respondeu: 'Se você pode?' Tudo é possível àquele que crê. - Marcos 9:23 (NVI)",
    "Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam. - Hebreus 11:6 (NVI)",

    // Felicidade
    "Este é o dia em que o Senhor agiu; alegremo-nos e exultemos neste dia. - Salmos 118:24 (NVI)",
    "Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se! - Filipenses 4:4 (NVI)",
    "O coração alegre aformoseia o rosto, mas com a tristeza do coração o espírito se abate. - Provérbios 15:13 (NVI)",
    "O Senhor é a minha força e o meu escudo; nele o meu coração confia, e dele recebo ajuda. Meu coração exulta de alegria, e com o meu cântico lhe darei graças. - Salmos 28:7 (NVI)",
    "O justo se regozija no Senhor e nele se refugia; todos os de coração reto o louvarão! - Salmos 64:10 (NVI)",

    // Amizade
    "Amigo ama em todos os momentos; é um irmão na adversidade. - Provérbios 17:17 (NVI)",
    "Perfume e incenso trazem alegria ao coração; do conselho sincero do homem nasce uma bela amizade. - Provérbios 27:9 (NVI)",
    "Assim como o ferro afia o ferro, o homem afia o seu companheiro. - Provérbios 27:17 (NVI)",
    "Melhor é a repreensão feita abertamente do que o amor escondido. - Provérbios 27:5 (NVI)",
    "Se alguém quiser prevalecer contra um, os dois resistirão. O cordão de três dobras não se rompe com facilidade. - Eclesiastes 4:12 (NVI)",

    // Aniversário
    "Ensina-nos a contar os nossos dias para que o nosso coração alcance sabedoria. - Salmos 90:12 (NVI)",
    "Dêem graças ao Senhor porque ele é bom; o seu amor dura para sempre. - 1 Crônicas 16:34 (NVI)",
    "Os anos da nossa vida chegam a setenta, ou a oitenta para os que têm mais vigor; entretanto, são anos difíceis e cheios de sofrimento, pois a vida passa depressa, e nós voamos. - Salmos 90:10 (NVI)",
    "O Senhor cumpre os desejos daqueles que o temem; ouve-os gritar por socorro e os salva. - Salmos 145:19 (NVI)",
    "Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele. - Salmos 118:24 (NVI)",

    // Fé
    "Porque vivemos por fé, e não pelo que vemos. - 2 Coríntios 5:7 (NVI)",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13 (NVI)",
    "Mas eu confio em ti, Senhor; e digo: 'Tu és o meu Deus'. - Salmos 31:14 (NVI)",
    "O Senhor é minha luz e minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei? - Salmos 27:1 (NVI)",
    "Mas o justo viverá pela fé. - Romanos 1:17 (NVI)",

    // Felicidade
    "Alegrem-se com os que se alegram; chorem com os que choram. - Romanos 12:15 (NVI)",
    "Bem-aventurados os que têm fome e sede de justiça, pois serão satisfeitos. - Mateus 5:6 (NVI)",
    "Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração. - Romanos 12:12 (NVI)",
    "Regozijem-se sempre. - 1 Tessalonicenses 5:16 (NVI)",
    "Bem-aventurados os que choram, pois serão consolados. - Mateus 5:4 (NVI)",

    // Amizade
    "O amigo fiel é um refúgio seguro; quem o encontrou, encontrou um tesouro. - Eclesiástico 6:14 (NVI)",
    "Há amigos mais chegados que um irmão. - Provérbios 18:24 (NVI)",
    "O meu mandamento é este: Amem-se uns aos outros como eu os amei. - João 15:12 (NVI)",
    "Ninguém tem maior amor do que aquele que dá a sua vida pelos seus amigos. - João 15:13 (NVI)",
    "Quem encontra um amigo, encontra um tesouro. - Eclesiástico 6:14 (NVI)",

    // Aniversário
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. - Números 6:24-26 (NVI)",
    "Mas os que esperam no Senhor renovarão as suas forças. Subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão. - Isaías 40:31 (NVI)",
    "Pois sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11 (NVI)",
    "Dêem graças ao Senhor porque ele é bom; o seu amor dura para sempre! - Salmos 107:1 (NVI)",
    "Grandes coisas fez o Senhor por nós, por isso estamos alegres. - Salmos 126:3 (NVI)",

    // Fé
    "Porque é pela graça que vocês são salvos, mediante a fé – e isso não vem de vocês, é dom de Deus. - Efésios 2:8 (NVI)",
    "Peçam, e será dado; busquem, e encontrarão; batam, e a porta será aberta. - Mateus 7:7 (NVI)",
    "Quando você passar por águas profundas, eu estarei com você; quando passar por rios de dificuldades, você não se afogará; quando passar pelo fogo da opressão, você não se queimará; as chamas não o consumirão. - Isaías 43:2 (NVI)",
    "Que diremos, pois, diante dessas coisas? Se Deus é por nós, quem será contra nós? - Romanos 8:31 (NVI)",
    "Pois o Senhor não abandona aqueles que são fiéis a ele. - Salmos 37:28 (NVI)",

    // Felicidade
    "O Senhor é minha força e meu cântico; ele é a minha salvação. - Êxodo 15:2 (NVI)",
    "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmos 30:5 (NVI)",
    "A bênção do Senhor traz riqueza, e não inclui dor alguma. - Provérbios 10:22 (NVI)",
    "Em tudo somos atribulados, mas não angustiados; perplexos, mas não desanimados. - 2 Coríntios 4:8 (NVI)",
    "Vocês serão como um jardim bem regado, como uma fonte cujas águas nunca faltam. - Isaías 58:11 (NVI)",

    // Amizade
    "Melhor é serem dois do que um, porque têm melhor paga do seu trabalho. - Eclesiastes 4:9 (NVI)",
    "O amigo ama em todos os momentos; é um irmão na adversidade. - Provérbios 17:17 (NVI)",
    "Deem e lhes será dado: uma boa medida, calcada, sacudida e transbordante será dada a vocês. Pois a medida que usarem, também será usada para medir vocês. - Lucas 6:38 (NVI)",
    "Os que confiam no Senhor são como o monte Sião, que não se pode abalar, mas permanece para sempre. - Salmos 125:1 (NVI)",
    "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam. - Naum 1:7 (NVI)"

];

button.addEventListener('click', function() {
  // Seleciona um versículo aleatório
  const randomVerse = verses[Math.floor(Math.random() * verses.length)];

  // Exibe o versículo na página com destaque
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `<p>${randomVerse}</p>`;
  
  // Adiciona a classe 'show' para aplicar a animação e destaque
  resultElement.classList.add('show');
});