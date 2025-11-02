import type { Meta, StoryObj } from '@storybook/react';
import {
  Typography,
  Title,
  TitleBold,
  Heading1,
  Heading1Bold,
  Heading2,
  Heading2Bold,
  Heading3,
  Heading3Bold,
  Heading4,
  Heading4Bold,
  Body,
  BodyBold,
  BodySmall,
  BodySmallBold,
  Description,
  DescriptionBold,
  DescriptionSmall,
  DescriptionSmallBold,
} from './typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

// Все варианты типографики в одной стори
export const Scale: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-white">
      {/* Title */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Title (80px)</h3>
        </div>
        <Title>Title Regular - The quick brown fox jumps over the lazy dog</Title>
        <TitleBold>Title Bold - The quick brown fox jumps over the lazy dog</TitleBold>
      </div>

      {/* Heading1 */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Heading1 (61px)</h3>
        </div>
        <Heading1>Heading1 Regular - The quick brown fox jumps over the lazy dog</Heading1>
        <Heading1Bold>Heading1 Bold - The quick brown fox jumps over the lazy dog</Heading1Bold>
      </div>

      {/* Heading2 */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Heading2 (47px)</h3>
        </div>
        <Heading2>Heading2 Regular - The quick brown fox jumps over the lazy dog</Heading2>
        <Heading2Bold>Heading2 Bold - The quick brown fox jumps over the lazy dog</Heading2Bold>
      </div>

      {/* Heading3 */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Heading3 (36px)</h3>
        </div>
        <Heading3>Heading3 Regular - The quick brown fox jumps over the lazy dog</Heading3>
        <Heading3Bold>Heading3 Bold - The quick brown fox jumps over the lazy dog</Heading3Bold>
      </div>

      {/* Heading4 */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Heading4 (27px)</h3>
        </div>
        <Heading4>Heading4 Regular - The quick brown fox jumps over the lazy dog</Heading4>
        <Heading4Bold>Heading4 Bold - The quick brown fox jumps over the lazy dog</Heading4Bold>
      </div>

      {/* Body */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Body (21px)</h3>
        </div>
        <Body>Body Regular - The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate how body text looks in a real context. It should be comfortable to read and have good line height.</Body>
        <BodyBold>Body Bold - The quick brown fox jumps over the lazy dog. This is a longer paragraph to demonstrate how body text looks in a real context.</BodyBold>
      </div>

      {/* Body Small */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Body Small (16px)</h3>
        </div>
        <BodySmall>Body Small Regular - The quick brown fox jumps over the lazy dog. This is smaller body text used for secondary content.</BodySmall>
        <BodySmallBold>Body Small Bold - The quick brown fox jumps over the lazy dog. This is smaller body text used for secondary content.</BodySmallBold>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Description (12px)</h3>
        </div>
        <Description>Description Regular - The quick brown fox jumps over the lazy dog. Used for captions and metadata.</Description>
        <DescriptionBold>Description Bold - The quick brown fox jumps over the lazy dog. Used for captions and metadata.</DescriptionBold>
      </div>

      {/* Description Small */}
      <div className="space-y-4">
        <div className="border-b border-grey pb-2">
          <h3 className="text-body-bold text-darkGrey">Description Small (9px)</h3>
        </div>
        <DescriptionSmall>Description Small Regular - The quick brown fox jumps over the lazy dog. Very small text for fine print.</DescriptionSmall>
        <DescriptionSmallBold>Description Small Bold - The quick brown fox jumps over the lazy dog. Very small text for fine print.</DescriptionSmallBold>
      </div>
    </div>
  ),
};

// Стори с цветами
export const WithColors: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-white">
      <Heading2 className="text-blue">Blue Heading</Heading2>
      <Body className="text-pink">Pink Body Text</Body>
      <BodySmall className="text-success">Success Small Text</BodySmall>
      <Description className="text-failure">Error Description</Description>
      
      <div className="bg-midnightBlue p-4 rounded-lg">
        <Body className="text-white">White text on dark background</Body>
      </div>
    </div>
  ),
};

// Стори с разными HTML тегами
export const SemanticHTML: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-white">
      <Title as="h1">This is an H1 Title</Title>
      <Heading1 as="h1">This is also H1</Heading1>
      <Heading2 as="h2">This is H2</Heading2>
      <Heading3 as="h3">This is H3</Heading3>
      <Heading4 as="h4">This is H4</Heading4>
      <Body as="p">This is a paragraph</Body>
      <Description as="span">This is a span</Description>
      <BodySmall as="label">This is a label</BodySmall>
    </div>
  ),
};

// Интерактивная стори для Typography компонента
export const Playground: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'body',
    className: '',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'title',
        'titleBold',
        'heading1',
        'heading1Bold',
        'heading2',
        'heading2Bold',
        'heading3',
        'heading3Bold',
        'heading4',
        'heading4Bold',
        'body',
        'bodyBold',
        'bodySmall',
        'bodySmallBold',
        'description',
        'descriptionBold',
        'descriptionSmall',
        'descriptionSmallBold',
      ],
    },
    as: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
    },
  },
};