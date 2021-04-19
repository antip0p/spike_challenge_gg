<script>
  import { getContext } from "svelte";
  import { Button, Row, Column, Header, HeaderNav, HeaderNavItem } from "carbon-components-svelte";
  import ChevronRight32 from "carbon-icons-svelte/lib/ChevronRight32";

  import LocationInput from './LocationInput.svelte';
  import { distance } from './_helpers/haversine';

  let currentUrl;
  let coord0 = {};
  let address0 = "";
  let coord1 = {};
  let address1 = "";

  const { carbon_theme } = getContext("Theme");

  function getDistance() {
    const d = distance([coord0['lat'], coord0['lon']], [coord1['lat'], coord1['lon']]);
    console.log(d);
  }

  const isInputInvalid = (coord0, coord1) => (
     Object.keys(coord0).length == 0 || Object.keys(coord1).length == 0
  );
</script>

<Header platformName="Spike Challenge" href="/">
  <HeaderNav>
    <HeaderNavItem
      href="/"
      text="Home"
      aria-current={currentUrl === '/' ? 'page' : undefined} />
  </HeaderNav>
</Header>

<Row>
  <Column lg="{16}">
    <h2 style="margin-bottom: 1.5rem">Calcular distancia</h2>
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
