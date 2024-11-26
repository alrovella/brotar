"use client";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { MessageCircle, Repeat2, AlertTriangle } from "lucide-react";
import { usePostBySlug } from "@/hooks/queries/usePosts";
export default function PostDetail({ slug }: { slug: string }) {
  const { data: post, isLoading } = usePostBySlug(slug);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {post ? (
            <Card className="bg-white overflow-hidden">
              <div className="flex md:flex-row flex-col">
                <div className="md:w-1/2">
                  <img
                    alt={post.title}
                    src="https://mulhalls.com/wp-content/uploads/2020/02/022520-blog-hero.jpg"
                    className="w-full h-64 md:h-[400px] lg:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl">
                          {post.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="min-h-64">{post.content}</CardContent>
                  <CardFooter className="flex sm:flex-row flex-col justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        <MessageCircle className="size--4" />
                        Contactar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                      >
                        <Repeat2 className="size--4" />
                        Intercambiar
                      </Button>
                    </div>
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive"
                      >
                        <AlertTriangle className="size--4" />
                        Denunciar
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </div>
            </Card>
          ) : (
            <p>La publicacion no existe</p>
          )}
        </>
      )}
    </>
  );
}
