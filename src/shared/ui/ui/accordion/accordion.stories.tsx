// src/shared/ui/ui/accordion/accordion.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './accordion';
import { AccordionItem } from './accordion-item';
import { useState } from 'react';

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof Accordion>;

// Компонент с состоянием для демонстрации
const AccordionWithState = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const accordionData = [
    {
      id: 1,
      question: "How does it work?",
      answer: "Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security."
    },
    {
      id: 2,
      question: "How does it work?",
      answer: "Our language learning application provides a user-friendly platform for teachers and students to connect. It utilizes cryptocurrency payments for added privacy and security."
    },
    {
      id: 3,
      question: "Subtitle",
      answer: "Additional information about the subtitle section would go here."
    }
  ];

  return (
    <div className="w-[400px]">
      <Accordion>
        {accordionData.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openId === item.id}
            onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          />
        ))}
      </Accordion>
    </div>
  );
};

export const Default: Story = {
  render: () => <AccordionWithState />,
};

// Статичный пример для контролов
export const Static: Story = {
  args: {
    children: (
      <>
        <AccordionItem
          question="First question"
          answer="First answer content"
          isOpen={true}
          onToggle={() => {}}
        />
        <AccordionItem
          question="Second question"
          answer="Second answer content"
          isOpen={false}
          onToggle={() => {}}
        />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[400px]">
        <Story />
      </div>
    ),
  ],
};