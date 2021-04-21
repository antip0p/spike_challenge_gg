<script>
  import { SkipToContent, Header, HeaderNav, HeaderNavItem } from "carbon-components-svelte";
  import { getContext } from "svelte";

  const ctx = getContext("Theme");
</script>

<Header company="GG" platformName="Spike Challenge" href="/">
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderNav>
    <HeaderNavItem href="/distances" text="Historial" />
  </HeaderNav>
</Header>
