import { render } from '@testing-library/react';
import { Typography, Title, Body, Description } from './typography';

describe('Typography', () => {
  it('renders with default variant', () => {
    const { getByText } = render(<Typography>Test text</Typography>);
    const element = getByText('Test text');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P');
  });

  it('applies correct variant classes', () => {
    const { getByText } = render(<Typography variant="title">Title</Typography>);
    const element = getByText('Title');
    expect(element).toHaveClass('text-title');
  });

  it('renders with custom element', () => {
    const { getByText } = render(<Typography as="span">Span text</Typography>);
    const element = getByText('Span text');
    expect(element.tagName).toBe('SPAN');
  });

  it('specialized components render correctly', () => {
    const { getByText: getByText1 } = render(<Title>Test Title</Title>);
    const title = getByText1('Test Title');
    expect(title).toHaveClass('text-title');
    expect(title.tagName).toBe('H1');

    const { getByText: getByText2 } = render(<Body>Test Body</Body>);
    const body = getByText2('Test Body');
    expect(body).toHaveClass('text-body');
    expect(body.tagName).toBe('P');

    const { getByText: getByText3 } = render(<Description>Test Description</Description>);
    const desc = getByText3('Test Description');
    expect(desc).toHaveClass('text-description');
    expect(desc.tagName).toBe('SPAN');
  });
});