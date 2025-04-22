import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { LabelComponent } from "../components/Label";

type StoryProps = ComponentProps<typeof LabelComponent>;

const meta: Meta<StoryProps> = {
  component: LabelComponent,
  tags: ["autodocs"],
  argTypes: {
    weight: {
      options: ["light", "regular", "medium", "bold"],
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
    htmlFor: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Label: Story = {
  args: {
    children: "This is a Label.",
    weight: "medium",
    size: "md",
    htmlFor: "input-id",
  },
};
