"use client";
import JsonData from "../components/ui/JsonData";
import { useGetPostsQuery } from "../redux/services/api/apiSlice";

const Posts = () => {
  const { data, error, isLoading } = useGetPostsQuery();
  return (
    <div>
      <h2 className="underline">Posts</h2>
      {data?.map((post) => (
        <JsonData data={post} />
      ))}
    </div>
  );
};

export default Posts;
