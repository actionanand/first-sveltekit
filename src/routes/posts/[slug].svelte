<script context="module">
  export async function load({params}) {
    const post = {
      title: params.slug,
      date: new Date(),
      body: 'new content is here!'
    };

    return {
      props: {
        post
      }
    };
  }
</script>

<script>
  export let post;
</script>

<!-- /posts/blog -->
<h3>This is simply slug. {post.title}</h3>