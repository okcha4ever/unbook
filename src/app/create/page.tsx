"use client";
import Tiptap from "@/components/ui/Tiptap";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAddSubject from "@/hooks/useAddSubject";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import parse from "html-react-parser";

const page = () => {
  const { mutateAsync, isSuccess } = useAddSubject();

  useEffect(() => {
    if (isSuccess) {
      // todo: show modal with uniqueId of the subject
      console.log("hi");
    }
  }, [isSuccess]);

  const formSchema = z.object({
    title: z
      .string()
      .min(3, { message: "Title too short buddy." })
      .max(100, { message: "Title too long buddy." }),
    description: z
      .string()
      .min(5, { message: "Description too short buddy" })
      .max(700, { message: "Description too long buddy." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await mutateAsync({
      title: data.title,
      description: data.description,

      // not needed, just so typescript is happy
      id: "",
      createdAt: new Date(),
    });
  };

  return (
    <main className="flex items-center justify-center py-10">
      <div className="w-fit">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* {form.getValues("description") &&
              parse(form.getValues("description"))} */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are you talking about?</FormLabel>
                  <FormControl>
                    <Input placeholder="Hmm.." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Speak to your heart's content...</FormLabel>
                  <FormControl>
                    <Tiptap onChange={field.onChange} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default page;
