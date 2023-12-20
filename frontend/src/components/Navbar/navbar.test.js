import { render, screen } from '@testing-library/react';
import Navbar from './navbar';

test('renders navbar with correct links', () => {
  render(<Navbar />);
  
  // Check if the navbar brand is rendered
  const navbarBrand = screen.getByRole('link', { name: /mdb/i });
  expect(navbarBrand).toBeInTheDocument();
  
  // Check if the navbar links are rendered
  const ourStoryLink = screen.getByRole('link', { name: /our story/i });
  expect(ourStoryLink).toBeInTheDocument();
  
  const membershipLink = screen.getByRole('link', { name: /membership/i });
  expect(membershipLink).toBeInTheDocument();
  
  const writeLink = screen.getByRole('link', { name: /write/i });
  expect(writeLink).toBeInTheDocument();
  
  const signInLink = screen.getByRole('link', { name: /sign in/i });
  expect(signInLink).toBeInTheDocument();
  
  // Check if the "Get Started" button is rendered
  const getStartedButton = screen.getByRole('button', { name: /get started/i });
  expect(getStartedButton).toBeInTheDocument();
});

test('renders content section with correct text', () => {
  render(<Navbar />);
  
  // Check if the content section is rendered
  const contentSection = screen.getByText(/scroll down to see the effect/i);
  expect(contentSection).toBeInTheDocument();
});