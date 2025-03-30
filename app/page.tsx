"use client";

import Header from "./components/header";
import JobList from "./components/JobList";
import ThemeToggle from "./components/test";
import { ThemeProvider } from "./components/themeContext";
import { Provider } from "react-redux";
import { store } from "./components/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Header />
        <JobList />
        <ThemeToggle />
      </ThemeProvider>
    </Provider>
  );
}
