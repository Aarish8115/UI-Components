import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Heading } from "../components/Heading";

type StoryProps = ComponentProps<typeof Heading> & {
  HeadingText: string;
};

const meta: Meta<StoryProps> = {
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
      control: false,
    },
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
        type: "select",
      },
      table: {
        type: { summary: "default | italic" },
      },
    },
    color: {
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
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const h1: Story = {
  args: {
    children: "This is an H1 heading",
    variant: "h1",
    size: "3xl",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
export const h2: Story = {
  args: {
    children: "This is an H2 heading",
    variant: "h2",
    size: "2xl",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
export const h3: Story = {
  args: {
    children: "This is an H3 heading",
    variant: "h3",
    size: "xl",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
export const h4: Story = {
  args: {
    children: "This is an H4 heading",
    variant: "h4",
    size: "lg",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
export const h5: Story = {
  args: {
    children: "This is an H5 heading",
    variant: "h5",
    size: "md",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
export const h6: Story = {
  args: {
    children: "This is an H6 heading",
    variant: "h6",
    size: "sm",
    weight: "regular",
    font: "default",
    color: "default",
    transform: "capitalize",
    alignment: "left",
  },
  render: (args) => <Heading {...args} />,
};
