<script>
  import Header from '$lib/Header.svelte';

  let date = new Date().getFullYear();
</script>


<Header/>
<main>
  <slot/>
</main>

<footer>
  &copy; {date}
</footer>

<style lang="scss">
  /* Assigning global css */
  :global(header) {
    background: wheat;
  }
</style>