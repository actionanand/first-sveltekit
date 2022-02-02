<script context="module">
  export async function load() {
    const posts = import.meta.globEager('../../lib/markdowns/posts/*.md');
    const postList = Object.values(posts);
    const postsMeta = postList.map(post => {
      return post.metadata;
    });
    // console.log({postsMeta: postsMeta});
    return {
      props: {
        posts: postsMeta
      }
    };
  }
</script>

<script>
  export let posts;
</script>

<!-- if u keep the name as '__layout.reset.svelte', root layout won't appear. if u keep as '__layout.svelte', both the layouts will be visible when using nested routes -->
<div>
  <slot/>
  <aside>
    <h5>Archives</h5>
    <ul>
      {#each posts as post}
        <li><a href="{post.slug}">{post.title}</a></li>
      {/each}
      <li><a href="/posts">Home</a></li>
      <li><a href="/posts/about">About</a></li>
    </ul>
  </aside>
</div>