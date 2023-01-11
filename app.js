const monstros = [
    {
        id: 1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id delectus voluptates rem ipsa? Ipsam perferendis officiis dignissimos omnis dolor, alias pariatur! Maiores tempora nesciunt cum, consequatur nisi iure aliquid.',
        foto: 'https://robohash.org/osvaldo'
    },
    {
        id: 2,
        nome: 'MegaMente',
        altura: 3,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id delectus voluptates rem ipsa? Ipsam perferendis officiis dignissimos omnis dolor, alias pariatur! Maiores tempora nesciunt cum, consequatur nisi iure aliquid.',
        foto: 'https://robohash.org/MegaMente'
    },
    {
        id: 3,
        nome: 'Devinho',
        altura: 7,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id delectus voluptates rem ipsa? Ipsam perferendis officiis dignissimos omnis dolor, alias pariatur! Maiores tempora nesciunt cum, consequatur nisi iure aliquid.',
        foto: 'https://robohash.org/Devinho'
    },
    {
        id: 4,
        nome: 'Abacate',
        altura: 1.4,
        habilidades: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore id delectus voluptates rem ipsa? Ipsam perferendis officiis dignissimos omnis dolor, alias pariatur! Maiores tempora nesciunt cum, consequatur nisi iure aliquid.',
        foto: 'https://robohash.org/Abacate'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map((monstro) => {
  return `<div> 
        <p>Nome: ${monstro.nome}</p>
        <p>Altura: ${monstro.altura}</p>
        <img src="${monstro.foto}">
        <p class="habilidades">Habilidades: ${monstro.habilidades}</p>
    </div>`
})

secao.innerHTML = todosOsMonstros
