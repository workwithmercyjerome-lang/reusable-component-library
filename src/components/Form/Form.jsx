import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

function Form({ fields = [], submitLabel = "Submit", onSubmit }) {
  const initialValues = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const missing = fields.find((field) => field.required && !values[field.name]);
    if (missing) {
      setError(`${missing.label || missing.name} is required.`);
      return;
    }

    setError("");
    setSubmitted(true);
    onSubmit?.(values);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
          required={field.required}
          value={values[field.name]}
          onChange={handleChange(field.name)}
        />
      ))}

      {error && <p className="form-message form-error">{error}</p>}
      {submitted && !error && <p className="form-message form-success">Saved.</p>}

      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}

export default Form;