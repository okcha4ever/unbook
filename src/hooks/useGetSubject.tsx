import { type Subject } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

const useGetSubject = (id: string) => {
  const handleRequest = async () => {
    const { data }: { data: Subject } = await axios.get(
      `/api/get-subject?id=${id}`,
    );
    return data;
  };
  const { data, isLoading, status } = useQuery({
    queryKey: ["get-subject", id],
    queryFn: handleRequest,
  });
  return { data, isLoading, status };
};

export default useGetSubject;
