"use client";
import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebaseConfig";

interface AuthRouteGuardProps {
  children: ReactNode;
}

const AuthRouteGuard: React.FC<AuthRouteGuardProps> = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading) {
      if (pathname.includes("admin")) {
        if (!user) router.push("/admin/auth");
        else {
          router.push("/admin");
        }
      }
    }
  }, [user, loading]);

  return <>{children}</>;
};

export default AuthRouteGuard;
