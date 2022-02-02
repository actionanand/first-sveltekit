<script context="module">
  export async function load({params}) {
    try {
      const Hello = (await import(`../../lib/markdowns/posts/${params.slug}.md`)); 
      console.log({Hello});

      const post = {
        title: params.slug,
        date: new Date(),
        body: 'new content is here!'
      };

      return {
        props: {
          post,
          Hello: Hello.default,
          title: Hello.metadata.title
        }
      };
    } catch (er) {
        // return {
        //   status: 303,
        //   redirect: '/posts'
        // };

        return {
          status: 404,
          error: `Page '${params.slug}' not found!`
        };
    }
  }
</script>

<script>
  // import Hello from '$lib/markdowns/posts/hello.md';

  export let post;
  export let Hello;
  export let title;
</script>

<!-- /posts/blog -->
<h3>This is simply slug. {post.title}</h3>
<h4>{title}</h4>
<Hello/>