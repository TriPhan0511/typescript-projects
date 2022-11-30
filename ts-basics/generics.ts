// // Making A Generic Function
// function simpleState<T>(initial: T): [() => T, (v: T) => void] {
//   let val: T = initial
//   return [
//     () => val,
//     (v: T) => {val = v}
//   ]
// }

// const [st1getter, st1setter] = simpleState(10)
// console.log(st1getter());
// st1setter(62)
// console.log(st1getter());
// -----------------------------------------------------------------

// // Overriding Inferred Generic Types

// function simpleState<T>(initial: T): [() => T, (v: T) => void] {
//   let val: T = initial
//   return [
//     () => val,
//     (v: T) => {val = v}
//   ]
// }

// const [st2getter, st2setter] = simpleState<string | null>(null)

// console.log(st2getter());
// st2setter('Hello')
// console.log(st2getter());
// -----------------------------------------------------------------

// Create a generic interface
interface Rank<RankItem> {
  item: RankItem,
  rank: number
}

// Create a generic function
function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map(item => ({
    item, 
    rank: rank(item)
  }))
  ranks.sort((a, b) => a.rank - b.rank)
  return ranks.map(rank => rank.item)
}

interface Pokemon {
  name: string,
  hp: number
}

const pokemons: Pokemon[] = [
  {
    name: 'Bulbasaur',
    hp: 20
  },
  {
    name: 'Megaasaur',
    hp: 5
  },
]

const ranks = ranker(pokemons, ({ hp }) => hp)
console.log(ranks);
