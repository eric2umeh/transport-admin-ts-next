import { ComponentType, FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { isLoggedInVar } from "@/apollo";

const withAuth = (WrappedComponent: ComponentType) => {
  const Wrapper: FC = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Check if the user is logged in
      const isLoggedIn = Boolean(localStorage.getItem('token'));

      // Update the reactive variable
      isLoggedInVar(isLoggedIn);

      // Redirect to a different page if the user is not logged in
      if (!isLoggedIn) {
        setIsLoading(false);
        router.replace('/login');
      } else {
        setIsLoading(false);
      }
    }, []);

    if (isLoading) {
      // You can show a loading spinner or any other UI while checking authentication
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
