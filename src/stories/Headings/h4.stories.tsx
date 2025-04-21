import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Head } from "../../components/Heading";

type StoryProps = ComponentProps<typeof Head> & {
  HeadText: string;
};

const meta: Meta<StoryProps> = {
  component: Head,
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
      control: {
        type: "select",
      },
      table: { type: { summary: "sm | md | lg | xl | 2xl | 3xl" } },
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
    variant: {
      options: ["default", "primary", "secondary", "muted", "accent"],
      control: {
        type: "select",
      },
      table: {
        type: { summary: "default | primary | secondary | muted | accent" },
      },
    },
    alignment: {
      options: ["left", "center", "right", "justify"],
      control: {
        type: "select",
      },
      table: { type: { summary: "left | center | right | justify" } },
    },
    transform: {
      options: ["capitalize", "uppercase", "lowercase"],
      control: {
        type: "select",
      },
      table: { type: { summary: "capitalize | uppercase | lowercase" } },
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
export const h4: Story = {
  args: {
    children: "This is a H4 heading",
    variant: "default",
    size: "lg",
    weight: "regular",
    font: "default",
    transform: "capitalize",
    lineheight: "normal",
    letterspacing: "normal",
    alignment: "left",
  },
  render: (args) => <Head {...args} />,
};
