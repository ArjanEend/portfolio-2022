import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "about"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const DefaultHero: Story = {
  args: {
    src: "/assets/profile.jpg",
    alt: "Arjan Cordia Profile Hero",
    variant: "default",
  },
};

export const AboutCard: Story = {
  args: {
    src: "/assets/profile.jpg",
    alt: "Arjan Cordia Profile About",
    variant: "about",
    badgeText: "🏛️ UWV Design System Eng.",
  },
};
