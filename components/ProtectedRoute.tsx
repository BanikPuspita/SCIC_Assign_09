"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/lib/cookies";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authed = isAuthenticated();
    if (!authed) {
      router.push("/login");
    } else {
      setIsAuthed(true);
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading || !isAuthed) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Redirecting to login...</p>
      </div>
    );
  }

  return children;
}
