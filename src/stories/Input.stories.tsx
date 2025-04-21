import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { Input } from "../components/Input";

type StoryProps = ComponentProps<typeof Input>;

const meta: Meta<StoryProps> = {
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["default", "error", "focus", "disabled"],
      control: {
        type: "select",
      },
      table: { type: { summary: "default | error | focus | disabled" } },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
      table: {
        type: { summary: "sm | md | lg" },
      },
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
