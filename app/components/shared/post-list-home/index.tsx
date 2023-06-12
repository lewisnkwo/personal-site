import PostItem from "~/components/shared/post-item";
import type { Post } from "~/types";

interface Props {
  posts: Post[];
  selectedPost: Post | undefined;
  setSelectedPost: (post: Post | undefined) => void;
}

const PostListHome = ({ posts, selectedPost, setSelectedPost }: Props) => (
  <>
    {posts.map((p, i) => (
      <PostItem
        key={i}
        {...p}
        onSelect={(slug) =>
          setSelectedPost(selectedPost?.slug === slug ? undefined : p)
        }
        isSelected={selectedPost?.id === p.id}
        tabIndex={i}
      />
    ))}
  </>
);

export default PostListHome;
