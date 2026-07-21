import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "tel", "email", "textarea"],
    },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const TextInput: Story = {
  args: {
    label: "Name",
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
    value: "",
    onChange: () => {},
  },
};

export const TextAreaInput: Story = {
  args: {
    label: "Message",
    id: "message",
    name: "message",
    type: "textarea",
    placeholder: "Write your message here...",
    rows: 4,
    required: true,
    value: "",
    onChange: () => {},
  },
};
