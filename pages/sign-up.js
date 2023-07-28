import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loading } from "../components/Loading/Loading";
import SignUp from "../components/SignUp/SignUp";

const SignUpPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return loading ? (
    <Loading />
  ) : (
    //   return (
    <div className="sign-up-page">
      <div className="overlay"></div>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
