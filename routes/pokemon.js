import express from 'express'
import { createPokemon, getPokemonById, 
    deletePokemon, updatePokemon,
    getAllPokemons } from '../controllers/pokemon.js'


const router = express.Router()

router.get('/', getAllPokemons)

router.post('/', createPokemon)

router.get('/:id', getPokemonById)

router.delete('/:id', deletePokemon)

router.patch('/:id', updatePokemon)

export default router