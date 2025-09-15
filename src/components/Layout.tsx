import { Footer } from "./Footer";
import { Header } from "./Header";

// src/components/Layout.tsx
export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);