import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Counter from "./Counter";
import Posts from "./Posts";
import PropsDemo from "./PropsDemo";
import LiftedCounter from "./LiftedCounter";
import ThemeDemo from "./ThemeDemo";
import "./App.css";

function AppContent() {
  return (
    <>
      <header className="header">
        <h1>React Hooks & Data Sharing</h1>
        <p>Explore React hooks and component communication</p>
      </header>

      <main className="container">
        <Counter />
        <Posts />
        <PropsDemo />
        <LiftedCounter />
        <ThemeDemo />

        <section className="section">
          <h2>6. Hooks vs Class Components</h2>

          <table>
            <thead>
              <tr>
                <th>Class Components</th>
                <th>Hooks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Use this.state</td>
                <td>Use useState</td>
              </tr>
              <tr>
                <td>Use lifecycle methods</td>
                <td>Use useEffect</td>
              </tr>
              <tr>
                <td>Logic reuse can require HOCs or render props</td>
                <td>Reusable logic with custom hooks</td>
              </tr>
              <tr>
                <td>Often more boilerplate</td>
                <td>Often simpler and more readable</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>

      <footer className="footer">React Hooks Experiment</footer>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
