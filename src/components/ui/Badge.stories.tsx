import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["yellow", "blue", "coral", "purple", "green", "white"],
    },
    isSticker: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: "white",
    children: "Standard Badge",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    children: "Tech Stack & Expertise",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    children: "React & Next.js",
  },
};

export const Coral: Story = {
  args: {
    color: "coral",
    children: "UWV Design System",
  },
};

export const Sticker: Story = {
  args: {
    color: "yellow",
    isSticker: true,
    children: "🏛️ Design Systems Specialist",
    className: "rotate-[-6deg]",
  },
};
