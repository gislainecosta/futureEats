import { useState } from "react";

export const baseUrl =
  "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

export const autorização = (history) => {
  const token = window.localStorage.getItem("token");
  if (token === null) {
    history.push("/Login");
  }
};
