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
    "Tudo posso naquele que me fortalece. - Filipenses 4:13 (NVI)"
];



button.addEventListener('click', function() {
    // Seleciona um versículo aleatório
    const randomVerse = verses[Math.floor(Math.random() * verses.length)];

    // Exibe o versículo na página
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${randomVerse}</p>`;
});