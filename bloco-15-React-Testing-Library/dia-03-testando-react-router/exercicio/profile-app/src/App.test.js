import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './renderWithRouter';

describe('renders pages from App', () => {
  test('render homepage', () => {
    const { getByRole } = renderWithRouter(<App />);
    const homeText = getByRole('heading', {
      name: /isso é um inicio/i,
      level: 1
    })
    expect(homeText).toBeInTheDocument();
  });

  test('render project page', () => {
    const { history, getByRole } = renderWithRouter(<App />);
    history.push('/projects')
    const projectText = getByRole('heading', {
      name: /isso é um projeto/i,
      level: 1
    })
    expect(projectText).toBeInTheDocument();
  });

  test('render about page', () => {
    const { history, getByRole } = renderWithRouter(<App />);
    history.push('/about')
    const aboutText = getByRole('heading', {
      name: /isso é um sobre/i,
      level: 1
    })
    expect(aboutText).toBeInTheDocument();
  });

  test('render contact page', () => {
    const { history, getByRole } = renderWithRouter(<App />);
    history.push('/contact')
    const aboutText = getByRole('heading', {
      name: /isso é um contato/i,
      level: 1
    })
    expect(aboutText).toBeInTheDocument();
  });

  test('render nomatch page', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/random-page')
    const aboutText = screen.getByRole('heading', {
      name: /para de tentar quebrar o site/i,
      level: 1
    })
    expect(aboutText).toBeInTheDocument();
  });
})
