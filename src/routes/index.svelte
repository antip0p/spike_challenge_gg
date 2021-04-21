<script>
  import { getContext } from "svelte";
  import { Button, Row, Column, Tile } from "carbon-components-svelte";
  import ChevronRight32 from "carbon-icons-svelte/lib/ChevronRight24";

  import LocationInput from '../components/LocationInput.svelte';
  import { calculateDistance } from './_helpers/haversine';

  let coord0 = {};
  let address0 = "";
  let coord1 = {};
  let address1 = "";
  let distance;

  $: distance = null;

  const { carbon_theme } = getContext("Theme");

  function getDistance() {
    distance = calculateDistance([coord0['lat'], coord0['lon']], [coord1['lat'], coord1['lon']]);

    fetch('/api/distances', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ address0, address1, distance })
    })
  }

  const isInputInvalid = (coord0, coord1) => (
     Object.keys(coord0).length == 0 || Object.keys(coord1).length == 0
  );
</script>

<Row>
  <Column lg="{16}">
    <h2>Distancia mínima</h2>
  </Column>
</Row>

<Row>
  <Column md={3}>
    <h5>Origen</h5>
  </Column>
  <Column md={3}>
    <h5>Destino</h5>
  </Column>
</Row>

<Row>
  <Column md="{3}">
    <LocationInput bind:coord={coord0} bind:value={address0} />
  </Column>

  <Column md="{3}">
    <LocationInput bind:coord={coord1} bind:value={address1}/>
  </Column>

  <Column md={1}>
    <Button
      icon={ChevronRight32}
      on:click={getDistance}
      iconDescription="Calcular distancia"
      disabled={isInputInvalid(coord0, coord1)}
    />
  </Column>
</Row>
<Row>
  <Column md={6}>
    { #if distance && address0 && address1}
      <Tile>Distancia: {distance} km</Tile>
    {/if}
  </Column>
</Row>

<style>
  h2 {
    margin-bottom: 1.5rem;
  }

  h5 {
    margin-bottom: 1rem;
  }
</style>
