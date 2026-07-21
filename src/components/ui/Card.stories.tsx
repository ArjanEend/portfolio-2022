import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    isInteractive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="font-display font-black text-xl mb-2">Default Card</h3>
        <p>This is a standard Neo-brutalist card without hover effects.</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    isInteractive: true,
    children: (
      <div>
        <h3 className="font-display font-black text-xl mb-2">Interactive Card</h3>
        <p>Hover over this card to see it translate and elevate its shadow.</p>
      </div>
    ),
  },
};
