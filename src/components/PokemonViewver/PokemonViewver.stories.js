import PokemonViewver from "./PokemonViewver";

export default {
  title: "MessageApp/PokemonViewver",
  component: PokemonViewver,
};

export const PokemonViewverIdle = () => <PokemonViewver />;
export const PokemonViewverLoading = () => <PokemonViewver status="loading"/>;
export const PokemonViewverResolved = () => <PokemonViewver status="resolved"/>;
export const PokemonViewverError = () => <PokemonViewver status="error"/>;
