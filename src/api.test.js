import { fetchAPokemon, fetchpokemonURL } from "./api";
// if("fetchPokemon test", () => {
//     return fetchPokemon().then((json) => {
//         expect(json).not.toBeNull();
//     )}
// });

it("fetchpokemon test", () => {
  jest.setTimeout(300000);

  //then- sucess function we expect json
  return fetchpokemonURL(url).then((json) => {
    expect(json).not.toBeNull();
    let results = json.results;
    expect(results.length).toBe(100);
  });
});

it('fetchpokemon test', async () => {
  jest.setTimeout(300000);

  const ditto = "ditto";
  //then- sucess function we expect json
  return fetchAPokemon(ditto).then((json) => {
    expect(json).not.toBeNull();
    // let results= json.results;
      // let results = json.sprites.other.front_default;
    // front artwork 
    const sprites = json.sprites;
    expect(sprites).not.toBeNull();
    const other = sprites.other;
    expect(other).not.toBeNull();
    const official_artwork = other.official_artwork;
    expect(official_artwork).not.toBeNull();
    const front_default = other.front_default;
    expect(front_default).not.toBeNull();
    // expect(results.length).toBe(100);
  }, 30000);
});
