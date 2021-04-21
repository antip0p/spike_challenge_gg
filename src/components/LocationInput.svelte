<script>
  import { ClickableTile, InlineLoading, Search} from "carbon-components-svelte";

  const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';

  export let value = "";
  export let coord = {};

  let promise = Promise.resolve([]);

  const clearSuggestions = () => promise = Promise.resolve([]);

  const lookup = (event) => {
    if (event.repeat || event.key === 'Enter') return;

    setTimeout(() => {
      promise = geoLookup(value);
    }, 0);
  }

  const setValue = (event) => {
    value = event.target.text;
    coord = {
      lat: event.target.getAttribute("data-lat"),
      lon: event.target.getAttribute("data-lon")
    };
    clearSuggestions();
  }

	async function geoLookup(query) {
		const res = await fetch(`${NOMINATIM_URL}/search?q=${query}&limit=5&format=json`);
    return await res.json();
	}
</script>

<Search
  bind:value
  on:keydown={lookup}
  on:clear={clearSuggestions}
  placeholder="Buscar dirección..."
/>

{#await promise}
  <InlineLoading />
{:then results}
  {#each results as result}
    <ClickableTile data-lat={result['lat']} data-lon={result['lon']} on:click={setValue}>
      {result['display_name']}
    </ClickableTile>
  {/each}
{/await}
