import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { HelperText } from "../../components/Helper";

type StoryProps = ComponentProps<typeof HelperText> & {
  HeadingText: string;
};

const meta: Meta<StoryProps> = {
  component: HelperText,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Provides additional helper text for inputs or labels. Useful for clarifying input expectations.",
      },
    },
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"],
      control: {
        type: "select",
      },
      table: { type: { summary: "xs | sm | md | lg | xl | 2xl | 3xl" } },
    },
    weight: {
      options: ["light", "regular", "medium", "semibold", "bold"],
      control: {
        type: "select",
      },
      table: {
        type: { summary: "light | regular | medium | semibold | bold" },
      },
    },
    font: {
      options: ["default", "italic"],
      control: {
        type: "radio",
      },
      table: {
        type: { summary: "default | italic" },
      },
    },
    alignment: {
      options: ["left", "center", "right", "justify"],
      control: {
        type: "select",
      },
      table: { type: { summary: "left | center | right | justify" } },
    },
    lineheight: {
      options: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      control: {
        type: "select",
      },
      table: { type: { summary: "tight | snug | normal | relaxed | loose" } },
    },
    letterspacing: {
      options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      control: {
        type: "select",
      },
      table: {
        type: { summary: "tighter | tight | normal | wide | wider | widest" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Helper: Story = {
  args: {
    children: "This is a helper text.",
    size: "sm",
    weight: "semibold",
    font: "default",
    alignment: "left",
    lineheight: "normal",
    letterspacing: "normal",
  },
  render: (args) => <HelperText {...args} />,
};
