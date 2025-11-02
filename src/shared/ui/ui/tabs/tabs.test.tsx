import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

describe('Tabs', () => {
  it('switches tabs when clicked', async () => {
    const user = userEvent.setup();
    const { getByText } = render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    await user.click(getByText('Tab 2'));
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  it('calls onValueChange when provided', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    
    const { getByText } = render(
      <Tabs defaultValue="tab1" onValueChange={handleChange}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
      </Tabs>
    );

    await user.click(getByText('Tab 2'));
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});