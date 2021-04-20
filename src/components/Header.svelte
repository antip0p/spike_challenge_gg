<script>
  import {
    SkipToContent,
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderUtilities,
    HeaderGlobalAction,
  } from "carbon-components-svelte";

  import LogoGithub24 from "carbon-icons-svelte/lib/LogoGithub24";
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

  <HeaderUtilities>
    <HeaderGlobalAction aria-label="User Avatar" icon="{LogoGithub24}" />
  </HeaderUtilities>
</Header>
