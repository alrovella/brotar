"use client";
import Link from "next/link";
import { Input } from "@repo/ui/components/ui/input";
import { Leaf, Search } from "lucide-react";
import { useCategories } from "@/hooks/queries/useCategories";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";

import { SignOutButton } from "@clerk/nextjs";

import PostForm from "./PostForm";

export default function Navbar() {
  const { data: categories } = useCategories();

  return (
    <nav className="bg-brand py-2 text-white">
      <div className="flex justify-between items-center mx-auto container">
        <Link
          href="/inicio"
          className="flex justify-center items-center font-bold text-2xl"
        >
          <span className="flex flex-col">
            <span className="flex items-center gap-1">
              <Leaf />
              <span>
                BROT<strong>AR</strong>
              </span>
            </span>
            <span className="text-xs">red de intercambio de plantas</span>
          </span>
        </Link>
        <div className="flex-grow mx-4">
          <div className="relative w-64">
            <Input
              type="search"
              placeholder="Buscar plantas..."
              className="pr-4 pl-10 w-full text-brand-300"
            />
            <Search className="top-1/2 left-3 absolute text-brand-300 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-full sm:w-[250px] text-brand-300">
              <SelectValue placeholder="Filtrar por categoría" />
            </SelectTrigger>
            <SelectContent>
              {categories?.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <PostForm />
          <Link href="/mi-perfil">Mi Cuenta</Link>
          <SignOutButton>Salir</SignOutButton>
        </div>
      </div>
    </nav>
  );
}
