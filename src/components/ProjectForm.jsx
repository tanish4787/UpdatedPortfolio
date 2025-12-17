import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useNavigate } from "react-router";
import { uploadToCloudinary } from "../lib/uploadImage.js";

export function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    features: "",
    github: "",
    live: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    try {
      // 1. Upload image
      const imageUrl = await uploadToCloudinary(imageFile);

      // 2. Save project
      await addDoc(collection(db, "projects"), {
        title: form.title,
        description: form.description,
        image: imageUrl,
        status: form.status,
        features: form.features.split(",").map((f) => f.trim()),
        github: form.github,
        live: form.live,
        createdAt: new Date(),
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl space-y-4 rounded-xl border p-6"
    >
      <h3 className="text-lg font-semibold">Add Project</h3>

      <Input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
      />
      <Textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      />

      <Input
        type="file"
        accept="image/*"
        placeholder="Project Image upload"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <Input
        name="status"
        placeholder="Status"
        value={form.status}
        onChange={handleChange}
      />
      <Input
        name="features"
        placeholder="Features (comma separated)"
        value={form.features}
        onChange={handleChange}
      />
      <Input
        name="github"
        placeholder="GitHub URL"
        value={form.github}
        onChange={handleChange}
      />
      <Input
        name="live"
        placeholder="Live URL"
        value={form.live}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full">
        Add Project
      </Button>
    </form>
  );
}
