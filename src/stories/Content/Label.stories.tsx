import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { LabelComponent } from "../../components/Label";

type StoryProps = ComponentProps<typeof LabelComponent>;

const meta: Meta<StoryProps> = {
  component: LabelComponent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A text label for form controls. Supports weight and size customization. Inherits all native label props.",
      },
    },
  },
  argTypes: {
    weight: {
      options: ["light", "regular", "medium", "bold"],
      control: {
        type: "select",
      },
      description: "Font weight of the label text.",
      table: { type: { summary: "default | error | focus | disabled" } },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "radio",
      },
      description: "Font size of the label text.",
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
