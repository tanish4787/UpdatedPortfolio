import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function deleteProject(projectId) {
  const ref = doc(db, "projects", projectId);
  await deleteDoc(ref);
}

export async function updateProject(projectId, updatedData) {
  const ref = doc(db, "projects", projectId);
  await updateDoc(ref, updatedData);
}
