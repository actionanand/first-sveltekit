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
  import Hello from '$lib/markdowns/posts/hello.md';

  export let post;
</script>

<!-- /posts/blog -->
<h3>This is simply slug. {post.title}</h3>
<Hello/>