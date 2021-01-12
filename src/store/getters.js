import state from './state';
import {parsePokemonInfo} from '@/utils/index';

export default {
	get pokemonsInfo() {
		return state.list.map(parsePokemonInfo);
	},
};
