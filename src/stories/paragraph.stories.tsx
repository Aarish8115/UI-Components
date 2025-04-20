import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Paragraph } from "../components/paragraph";

type StoryProps = ComponentProps<typeof Paragraph> & {
  HeadingText: string;
};

const meta: Meta<StoryProps> = {
  component: Paragraph,
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
  },
  render: (args) => <Paragraph {...args} />,
};
