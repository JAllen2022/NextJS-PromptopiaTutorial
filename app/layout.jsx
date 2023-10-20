import "@styles/globals.css";

export const metadata = {
  title: "Researchtopia",
  description: "Discover and Share AI Summarized Reasearch Papers",
};

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
