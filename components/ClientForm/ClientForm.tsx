"use client";

import { useState } from "react";
import css from "./ClientForm.module.css";
import { FormFields } from "@/types/types";
import { useFormStore } from "@/lib/store/formStore";
import { formSchema } from "../../validation/form";
import { Button } from "../Button/Button";

export default function ClientForm() {
  const { draft, setDraft, clearDraft } = useFormStore();

  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values: FormFields = { ...draft };
    const { error } = formSchema.validate(values);

    if (error) {
      setMessage(error.message);
      setTimeout(() => setMessage(""), 5000);
      return;
    }

    setMessage("Your booking request has been accepted!");
    clearDraft();

    setTimeout(() => {
      window.location.href = "/"; 
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.formBlock}>
      <h2 className={css.formTitle}>Book your car now</h2>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>

      {message && <p className={css.success}>{message}</p>}

      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={draft.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={draft.email}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={draft.date}
          onChange={handleChange}
        />

        <textarea
          name="comment"
          placeholder="Comment"
          className={css.textarea}
          value={draft.comment}
          onChange={handleChange}
        />

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}
