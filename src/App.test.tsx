import { render, screen } from '@testing-library/react';
import { App, controlSum } from './App';
import {test} from '@jest/globals';

test('renders learn react link', async () => {
  render(<App />);

  expect(screen.getByText("SPENT TIME (SECONDS)")).toBeDefined();
  expect(screen.getByText("Landing Page")).toBeDefined();
  expect(screen.getByText("Configurator")).toBeDefined();
  expect(screen.getByText("Check-out")).toBeDefined();
  expect(screen.getByText("Deal")).toBeDefined();
  expect(screen.getByRole("button", { name: "Random" })).toBeDefined();
});

test('adds valueField.time to equal < 100', async () => {
const sum = await controlSum();
  expect(sum < 100).toBe(true);
});