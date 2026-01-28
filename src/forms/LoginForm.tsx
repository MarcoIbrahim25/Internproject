import { useForm } from "@tanstack/react-form";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import FieldError from "../components/ui/FieldError";

export default function LoginForm() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("Submitted:", value);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field
        name="email"
        children={(field) => (
          <div>
            <Input
              label="Email"
              value={field.state.value}
              onChange={field.handleChange}
              type="email"
            />
            <FieldError message={field.state.meta.errors?.[0]} />
          </div>
        )}
      />

      <form.Field
        name="password"
        children={(field) => (
          <div>
            <Input
              label="Password"
              value={field.state.value}
              onChange={field.handleChange}
              type="password"
            />
            <FieldError message={field.state.meta.errors?.[0]} />
          </div>
        )}
      />

      <Button type="submit">Login</Button>
    </form>
  );
}
