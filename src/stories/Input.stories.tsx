import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { Input } from "../components/Input";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An input field with customizable variant and size. Inherits all native HTML input props.",
      },
    },
  },
  argTypes: {
    variant: {
      options: ["default", "error", "focus", "disabled"],
      control: {
        type: "select",
      },
      description: "Visual style of the input.",
      table: { type: { summary: "default | error | focus | disabled" } },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
      description: "Controls the input's padding and font size.",
      table: {
        type: { summary: "sm | md | lg" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown inside the input.",
      table: { type: { summary: "string" } },
    },
    type: {
      control: "text",
      description: "Type of the input field (e.g., text, password, email).",
      table: { type: { summary: "string" }, defaultValue: { summary: "text" } },
    },
    value: {
      control: "text",
      description: "Input value.",
      table: { type: { summary: "string" } },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal: Story = {
  args: {
    variant: "default",
    size: "md",
  },
};
export const Focus: Story = {
  args: {
    variant: "focus",
    size: "md",
  },
};
export const Error: Story = {
  args: {
    variant: "error",
    size: "md",
  },
};
export const Disabled: Story = {
  args: {
    variant: "disabled",
    size: "md",
  },
};
