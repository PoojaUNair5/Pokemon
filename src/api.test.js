import { fetchAPokemon, fetchpokemonURL } from './api';
import lget from 'lodash/get';
// if("fetchPokemon test", () => {
//     return fetchPokemon().then((json) => {
//         expect(json).not.toBeNull();
//     )}
// });

it('fetchpokemon test', () => {
  jest.setTimeout(300000);

  //then- sucess function we expect json
  return fetchpokemonURL(url).then((json) => {
    expect(json).not.toBeNull();
    let results = json.results;
    expect(results.length).toBe(100);
  });
});

it('fetchpokemon test-', async () => {
  jest.setTimeout(300000);

  const ditto = 'ditto';
  //then- sucess function we expect json
  return fetchAPokemon(ditto).then((json) => {
    expect(json).not.toBeNull();
    // let results= json.results;
    // let front_artwork = json?.sprites?.other?.official_artwork?.front_default;
    //json.?sprites?.other?.{'official-artwork'}?.front_default
    // front artwork
    // const sprites = json.sprites;
    // expect(sprites).not.toBeUndefined();
    // const other = sprites.other;
    // expect(other).not.toBeUndefined();
    // const official_artwork = other['official_artwork'];
    // expect(official_artwork).not.toBeUndefined();
    // const front_default = official_artwork.front_default;
    // expect(results.length).toBe(100);

    const front_default = lget(
      json,
      "sprites.other.official-artwork.front_default"
    );
    expect(front_default).not.toBeUndefined();
  }, 30000);
});
