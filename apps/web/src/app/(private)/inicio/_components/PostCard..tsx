import type { Post } from "@repo/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@repo/ui/components/ui/card";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui/components/ui/avatar";
import { Button } from "@repo/ui/components/ui/button";
import { Repeat2 } from "lucide-react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Card key={post.id} className="bg-white">
      <Link
        href={`/publicacion/${post.slug}`}
        className="block hover:opacity-80 transition-opacity"
      >
        <CardHeader className="p-4">
          <CardTitle className="text-lg md:text-xl">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="relative mb-4 aspect-square">
            <img
              src="https://mulhalls.com/wp-content/uploads/2020/02/022520-blog-hero.jpg"
              alt={post.title}
              className="rounded-md w-full h-full object-cover"
            />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex sm:flex-row flex-col justify-between gap-2 p-4">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src={"https://avatars.githubusercontent.com/u/127750088?s=48&v=4"}
              alt="Avatar"
            />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <span className="text-sm">Usuario @alrovella</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="flex justify-center items-center w-full sm:w-auto"
        >
          <Repeat2 className="w-4 h-4" />
          Intercambiar
        </Button>
      </CardFooter>
    </Card>
  );
}
