import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Content } from "../components/Content";

type StoryProps = ComponentProps<typeof Content> & {
  HeadingText: string;
};

const meta: Meta<StoryProps> = {
  component: Content,
  tags: ["autodocs"],
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
        type: "select",
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

export const paragraph: Story = {
  args: {
    children: "This is a paragraph",
    size: "md",
    weight: "regular",
    font: "default",
    alignment: "left",
    lineheight: "normal",
    letterspacing: "normal",
  },
  render: (args) => <Content {...args} />,
};
export const label: Story = {
  args: {
    children: "This is a label.",
    size: "lg",
    weight: "medium",
    font: "default",
    alignment: "left",
    lineheight: "normal",
    letterspacing: "normal",
  },
  render: (args) => <Content {...args} />,
};
export const Caption: Story = {
  args: {
    children: '"This is a caption."',
    size: "sm",
    weight: "light",
    font: "italic",
    alignment: "left",
    lineheight: "normal",
    letterspacing: "normal",
  },
  render: (args) => <Content {...args} />,
};
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
  render: (args) => <Content {...args} />,
};
