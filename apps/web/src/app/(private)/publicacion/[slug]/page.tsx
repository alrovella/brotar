import PostDetail from "./_components/PostDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostDetail slug={slug} />;
}
