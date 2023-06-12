import PostItem from "~/components/shared/post-item";
import type { Post } from "~/types";

interface Props {
  posts: Partial<Post>[];
  onSelect: (slug: string) => void;
}

const PostList = ({ posts, onSelect }: Props) => (
  <>
    {posts.map((p, i) => (
      <PostItem key={i} {...p} onSelect={onSelect} tabIndex={i} />
    ))}
  </>
);

export default PostList;
