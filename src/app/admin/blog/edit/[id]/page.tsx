"use client";

import { useEffect, useState } from "react";
import BlogEditor from "@/components/admin/blog/BlogEditor";
import { uploadToCloudinary } from "@/lib/uploadImage";

type BlogForm = {
  title: string;
  description: string;
  mainImage: string;
  content: any;
  tags: string;
};

export default function EditBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const [form, setForm] = useState<BlogForm | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch existing blog
  useEffect(() => {
    fetch(`/api/blogs/${params.id}`)
      .then(res => res.json())
      .then(blog =>
        setForm({
          title: blog.title,
          description: blog.description,
          mainImage: blog.mainImage,
          content: blog.content,
          tags: blog.tags.join(", "),
        })
      );
  }, [params.id]);

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;
    const url = await uploadToCloudinary(e.target.files[0]);
    setForm(prev => prev && { ...prev, mainImage: url });
  };

  const handleUpdate = async () => {
    if (!form) return;

    setLoading(true);

    const res = await fetch(`/api/blogs/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        tags: form.tags.split(",").map(t => t.trim()),
      }),
    });

    const updated = await res.json();
    setLoading(false);

    window.location.href = `/blog/${updated.slug}`;
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {form.mainImage && (
        <img
          src={form.mainImage}
          className="rounded-xl max-h-64"
        />
      )}

      <BlogEditor
        form={form}
        setForm={setForm}
        onSubmit={handleUpdate}
        buttonText={loading ? "Updating..." : "Update"}
      />
    </div>
  );
}
