import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { AlertMessage } from "../components/Alert";

type StoryProps = ComponentProps<typeof AlertMessage>;

const meta: Meta<StoryProps> = {
  component: AlertMessage,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["success", "error", "warning", "info"],
      control: {
        type: "select",
      },
      table: { type: { summary: "success|error|warning|info" } },
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

export const Success: Story = {
  args: {
    variant: "success",
    size: "md",
  },
};
export const Error: Story = {
  args: {
    variant: "error",
    size: "md",
  },
};
export const Info: Story = {
  args: {
    variant: "info",
    size: "md",
  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    size: "md",
  },
};
