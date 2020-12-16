import axios from 'axios';

import { API_URL, API_VERSION } from '../config/env';

const api = axios.create({
  baseURL: `${API_URL}/${API_VERSION}/`,
});

export const getPokemon = async filter => await api.get(`pokemon/${filter}`);

export const getPokemonSpecies = async pokemonId =>
  await api.get(`pokemon-species/${pokemonId}`);
