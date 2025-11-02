import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders with label', () => {
    const { getByText } = render(<Checkbox label="Test checkbox" />);
    expect(getByText('Test checkbox')).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox onChange={handleChange} />);
    
    const checkbox = getByRole('checkbox');
    await user.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('renders checked state', () => {
    const { getByRole } = render(<Checkbox checked={true} />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('respects disabled prop', () => {
    const { getByRole } = render(<Checkbox disabled />);
    const checkbox = getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });
});