"use client";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Subject } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Reveal from "./Reveal";
import { Button } from "../ui/button";

export function SearchInput() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState<Subject | null>();

  const getSubject = async (id: string) => {
    const { data }: { data: Subject } = await axios.get(
      `/api/get-subject?id=${id}`,
    );
    setSubject(data);
    return data;
  };

  const schema = z.object({
    id: z.string().min(21).max(21),
  });

  const { register, handleSubmit, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (formData: z.infer<typeof schema>) => {
    await getSubject(formData.id);
    if (subject === null) return;
    setOpen(true);
    reset();
  };

  return (
    <div className="flex w-full max-w-sm items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="inline-flex space-x-2">
        <Input
          placeholder="Enter unique code..."
          {...register("id")}
          className="placeholder:text-gray-400"
        />
        <AlertDialog open={open} onOpenChange={setOpen}>
          <Button type="submit">Reveal</Button>
          <Reveal subject={subject} />
        </AlertDialog>
      </form>
    </div>
  );
}
