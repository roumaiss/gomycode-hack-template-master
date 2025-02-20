import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useUser() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return {
    user,
    setUser(newUser) {
      dispatch(setUser(newUser));
    },
  };
}
