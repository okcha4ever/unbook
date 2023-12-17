import { type MutationFunction, useMutation } from "react-query";
import axios from "axios";
import { type Subject } from "@prisma/client";
import { toast } from "sonner";

const useAddSubject = () => {
  const handleRequest: MutationFunction<Subject, Subject> = async (
    variables,
  ) => {
    try {
      const { data }: { data: Subject } = await axios.post("/api/add-subject", {
        title: variables.title,
        description: variables.description,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };

  const { mutateAsync, isLoading, data, status, isSuccess } = useMutation({
    mutationFn: handleRequest,
    onMutate: () => {
      toast.loading("Creating your Subject...");
    },
    onSuccess: () => {
      toast.success("Subject created successfully");
    },
    onError: () => {
      toast.error("Something went wrong!");
    },
  });

  return { mutateAsync, isLoading, data, status, isSuccess };
};

export default useAddSubject;
