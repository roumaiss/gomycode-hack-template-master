import { createPlan } from "@/api/endpoints/planningUser";
import { useMutation } from "@tanstack/react-query";
import React from "react";

export default function useAddPlanUser() {
  const {
    mutate: CreatePlan,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: createPlan,
    mutationKey: ["add-plan"],
    onSuccess: (response) => {},
    onError: (err) => {},
  });
  return { CratePlan, isPending, isError, error };
}
