import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import { PROJECTS, SKILL_GROUPS, SKILL_USES } from './forest/data';
import { CONTRIBUTIONS } from './forest/contributions';

test('renders site branding', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Hudson Whipple/i })).toBeInTheDocument();
});

test('lists every project with its headline metric', () => {
  render(<App />);
  PROJECTS.forEach((p) => {
    const heading = screen.getByRole('heading', { level: 3, name: p.title });
    const row = heading.closest('article');
    expect(within(row).getByText(p.metric.value)).toBeInTheDocument();
  });
});

test('project links open the public repo or site', () => {
  render(<App />);
  PROJECTS.filter((p) => p.link).forEach((p) => {
    expect(screen.getByRole('link', { name: p.title })).toHaveAttribute('href', p.link.href);
  });
});

test('picking a skill shows where it was used', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'PyTorch' }));
  expect(screen.getByText(/in Autonomous drone racing/)).toBeInTheDocument();
});

test('shows the GitHub heat map with the year total', () => {
  render(<App />);
  const total = CONTRIBUTIONS.counts.reduce((a, b) => a + b, 0);
  const heading = screen.getByRole('heading', { level: 3, name: /in the last year/ });
  expect(heading).toHaveTextContent(new Intl.NumberFormat('en-US').format(total));
  expect(screen.getByRole('img', { name: /Use the arrow keys/ })).toBeInTheDocument();
});

test('every skill mapped to a project or role exists in the skills list', () => {
  const listed = new Set(SKILL_GROUPS.flatMap((g) => g.skills));
  const projectOnly = new Set(PROJECTS.flatMap((p) => p.stack));
  Object.keys(SKILL_USES)
    .filter((s) => !projectOnly.has(s))
    .forEach((s) => expect(listed.has(s)).toBe(true));
});
