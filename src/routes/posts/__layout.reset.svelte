<script>

import { append_hydration } from "svelte/internal";

</script>
<!-- if u keep the name as '__layout.reset.svelte', root layout won't appear. if u keep as '__layout.svelte', both the layouts will be visible when using nested routes -->
<div>
  <slot/>
  <aside>
    <h5>Archives</h5>
    <ul>
      <li><a href="/posts">Home</a></li>
      <li><a href="/posts/about">About</a></li>
      <li><a href="">Three</a></li>
      <li><a href="">Foure</a></li>
    </ul>
  </aside>
</div>