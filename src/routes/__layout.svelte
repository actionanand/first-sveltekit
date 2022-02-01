<script>
  import Header from '$lib/Header.svelte';
  // import '../tailwind.css';

  let date = new Date().getFullYear();
</script>


<Header/>
<main class="bg-green-400">
  <slot/>
</main>

<footer>
  &copy; {date}
</footer>

<!-- <style lang="scss">
  /* Assigning global css */
  :global(header) {
    background: wheat;
  }
</style> -->