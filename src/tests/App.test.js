import { render } from '@testing-library/react';
import App from '../App';

it('renders without crashing', () => {
  render(<App />)
})

test('renders corrct content', () => {
  const {getByTestId, getByText} = render(<App />)
  const button = getByTestId("button")
  const app = getByTestId("App")
  
  expect(app).toContainElement(button);
  expect(button.textContent).toBe('learn react');
  getByText("learn react")
  
})
