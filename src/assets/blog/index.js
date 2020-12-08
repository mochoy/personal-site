import first_post from './first_post';

// Array of all posts before fetching and parsing the markdown file
const postsBeforeFetchingFile = [
  first_post
];

// Apply any sort of data init for blog posts, like retreiving and parsing 
// the markdown file
const posts = postsBeforeFetchingFile.map(
  async (postBeforeFetchingFile) => {
    const { postFile } = postBeforeFetchingFile;

    // Fetch file, then get the text of that file
    let post = await fetch(postFile).then(res => res.text());

    console.log(post)

    return {
      ...postsBeforeFetchingFile,
      post: post
    } 
  }
);

export default posts;