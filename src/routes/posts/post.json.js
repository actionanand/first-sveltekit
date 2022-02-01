// this will create url 'posts/post.json' and return the json as response

export async function get({ params }) {
  return {
    status: 200,
    body: {
      data: 'test'
    }
  };
}