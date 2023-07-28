import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SignIn from "../components/SignIn/SignIn";
import { Loading } from "../components/Loading/Loading";

const SignInPage = () => {
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
    <div className="sign-in-page">
      <div className="overlay"></div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
