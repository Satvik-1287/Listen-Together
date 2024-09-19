import React from "react";
import heroImage from "assets/hero-section.jpg";
import heroImageMobile from "assets/hero-section-mobile.jpg";
import useAuth from "context/AuthContext";
import useError from "hooks/useError";
import useMediaQuery from "hooks/useMediaQuery";
import Button from "components/Button";

const Landing = () => {
  const isMobile = useMediaQuery();
  const { logIn, error, dismissError, logInAnonymous, isLoading } = useAuth();
  const errorComponent = useError(error, dismissError);

  return (
    <div
      style={{
        backgroundImage: `url('${isMobile ? heroImageMobile : heroImage}')`,
      }}
      className="bg-cover bg-blend-overlay bg-center h-full bg-primary 
      flex flex-col justify-center items-center text-center"
    >
      {errorComponent}
      <div>
        <h1 className="text-5xl md:text-6xl m-3">LET'S LISTEN TOGETHER</h1>
        <p className="text-base md:text-lg mx-3">
          Listen to your favorite music synchronously and discuss it with your
          friends.
        </p>
        <div className="flex sm:items-center justify-center flex-col sm:flex-row gap-2 text-primary md:text-lg m-10">
          <Button
            type="secondary"
            onClick={logIn}
            className="font-semibold py-3"
            disabled={isLoading === "google"}
          >
            <i className="fa-brands fa-google pr-3"></i>Sign in with Google
          </Button>
          <Button
            type="secondary"
            className="font-semibold py-3"
            onClick={logInAnonymous}
            disabled={isLoading === "anon"}
          >
            <i className="fa-solid fa-user pr-2"></i> Sign in Anonymously
          </Button>
        </div>
      </div>
      <footer className="absolute w-full bottom-0 left-0 flex justify-center">
        <a
          target="_blank"
          href="https://github.com/Satvik-1287"
          rel="noreferrer"
          className="text-xl mx-4 my-4 p-1"
        ></a>
          <i className="fa-brands fa-github"></i>
      </footer>
    </div>
  );
};

export default Landing;
