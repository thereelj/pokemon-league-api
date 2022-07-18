import {v4 as uuidv4} from 'uuid'

let pokemons = []

export const getAllPokemons = (req, res) => {
    console.log(pokemons)
    res.send(pokemons)
}

export const createPokemon = (req, res) => {
    const pokemon = req.body
    const totalStats = pokemon.attack + pokemon.defense + pokemon.speed
    pokemons.push({...pokemon, id: uuidv4(), total_stats: totalStats})
    res.send(`${pokemon.name} was added to the database!`)
}

export const getPokemonById = (req, res) => {
    const { id } = req.params
    const foundPokemon = pokemons.find((user) => user.id === id)
    res.send(foundPokemon)
}

export const deletePokemon = (req, res) => {
    const { id } = req.params
    pokemons = pokemons.filter((pokemon) => pokemon.id !== id)
    res.send(`Pokemon with the ID of ${id} has been deleted from the database.`)
}

export const updatePokemon = (req, res) => {
    const { id } = req.params
    const {name, type, attack, defense, speed} = req.body
    const pokemon = pokemons.find((pokemon) => pokemon.id === id)
    if (name) pokemon.name = name
    if (type) pokemon.type = type
    if (attack || defense || speed) {
        if (attack) pokemon.attack = attack
        if (defense) pokemon.defense = defense
        if (speed) pokemon.speed = speed
        pokemon.total_stats = pokemon.attack + pokemon.defense + pokemon.speed
    }

    res.send(`Pokemon with the id of ${id} has been updated`)
    
}