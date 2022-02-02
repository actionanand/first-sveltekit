<script context="module">
  export function load({error, status}) {
    return {
      props: {
        error,
        status
      }
    };
  }
</script>

<script>
  export let error;
  export let status;
</script>

<h1>Error!</h1>
<h2>{status}</h2>
<h2>{error.message}</h2>
