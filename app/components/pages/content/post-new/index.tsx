const PostNew = () => (
  <>
    <h1>Add new post</h1>
    <form method="post" action="post">
      <input
        name="title"
        type="text"
        placeholder="Enter post title..."
        aria-label="Enter post title"
      />
      <input
        name="subtitle"
        type="text"
        placeholder="Enter subtitle..."
        aria-label="Enter post subtitle"
      />
      <textarea
        name="body"
        placeholder="I just found out..."
        aria-label="Enter post body"
      />
      <select name="topic" defaultValue="coding" aria-label="Post topic">
        <option value="coding">Coding</option>
        <option value="travel">Travel</option>
        <option value="fitness">Fitness</option>
      </select>
      <button type="submit">Add post</button>
    </form>
  </>
);

export default PostNew;
