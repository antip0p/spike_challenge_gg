<script context="module">
  export async function preload(page, session) {
    const res = await this.fetch('/api/distances');
    const distanceRows = await res.json();
		return { distanceRows };
	}
</script>

<script>
  import { DataTable } from "carbon-components-svelte";
  export let distanceRows;
</script>

<DataTable
  headers={[
    { key: 'address0', value: 'Origen' },
    { key: 'address1', value: 'Destino' },
    { key: 'distance', value: 'Distancia' }
  ]}
  rows={distanceRows}
/>
