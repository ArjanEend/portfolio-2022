import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    variant: {
      control: "select",
      options: ["default", "section", "sub-border"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const TitleH1: Story = {
  args: {
    level: 1,
    children: "Arjan Cordia",
  },
};

export const SubTitleH2: Story = {
  args: {
    level: 2,
    children: "Senior Software Engineer",
  },
};

export const SectionHeader: Story = {
  args: {
    variant: "section",
    children: "What I Focus On",
  },
};

export const SubHeaderWithBorder: Story = {
  args: {
    variant: "sub-border",
    children: "🎨 Frontend Platforms & Design Systems",
  },
};
