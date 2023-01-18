import { checkError, client } from './client.js';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*');
  return checkError(resp);
}

// export async function getAuthors(author_id) {
//   const resp = await client.from('authors').select('name').match({ id: author_id });
// }
