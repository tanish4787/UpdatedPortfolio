import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/auth";
import { ProjectForm } from "./ProjectForm";
import { Navigate } from "react-router";

export function UploadPanel() {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  if (!user) return <Navigate to="/" replace />;

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h1
        className="mb-6 text-center
      text-balance text-4xl font-semibold tracking-tight md:text-5xl
      "
      >
        Upload Panel
      </h1>
      <ProjectForm />
    </section>
  );
}
