import { useForm } from "@tanstack/react-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function InvoiceForm() {
  const form = useForm({
    defaultValues: {
      items: [{ name: "" }],
      totalCount: 1,
    },
    onSubmit: ({ value }) => {
      console.log("Invoice Submitted:", value);
    },
  });

  const updateTotal = (items: any[]) => {
    form.setFieldValue("totalCount", items.length);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <form.Field
        name="items"
        children={(field) => (
          <div className="space-y-3">
            {field.state.value.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <Input
                  label={`Item ${index + 1}`}
                  value={item.name}
                  onChange={(val) => {
                    const updated = [...field.state.value];
                    updated[index].name = val;
                    field.handleChange(updated);
                    updateTotal(updated);
                  }}
                />

                <Button
                  onClick={() => {
                    const updated = field.state.value.filter(
                      (_, i) => i !== index
                    );
                    field.handleChange(updated);
                    updateTotal(updated);
                  }}
                >
                  -
                </Button>
              </div>
            ))}

            <Button
              onClick={() => {
                const updated = [...field.state.value, { name: "" }];
                field.handleChange(updated);
                updateTotal(updated);
              }}
            >
              + Add Item
            </Button>
          </div>
        )}
      />

      <form.Field
        name="totalCount"
        children={(field) => (
          <p className="text-sm font-semibold">
            Total Items: {field.state.value}
          </p>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}
