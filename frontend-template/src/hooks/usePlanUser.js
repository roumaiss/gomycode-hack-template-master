import { getUserPlansbyDate } from "@/api/endpoints/planningUser";
import { useQuery } from "@tanstack/react-query";

export const useGetPlanUser = (date) => {
  const { data, isError, error, isFetching } = useQuery({
    queryFn: () => {
      return getUserPlansbyDate(date);
    },
    queryKey: ["plans", date],
  });
  return {
    plan: data,
    isFetching,
    isError,
    error,
  };
};
