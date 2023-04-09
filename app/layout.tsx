import React from "react";
import Header from "@/Components/Header/Header";
import "./globals.css";

type Props = {};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default layout;
