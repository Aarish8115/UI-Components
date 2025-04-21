import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Paragraph } from "../../components/Paragraph";

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

export const paragraph: Story = {
  args: {
    children:
      "This is a paragraph. It serves as a simple collection of sentences that work together to express an idea or provide information. Paragraphs help organize writing, making it easier to read and understand. Whether in stories, articles, or essays, they give structure and flow to written communication.",
    size: "md",
    weight: "regular",
    font: "default",
    alignment: "left",
    lineheight: "normal",
    letterspacing: "normal",
  },
  render: (args) => <Paragraph {...args} />,
};
