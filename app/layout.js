import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LTI Test Local",
  description: "Project for LTI TEST on Local",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppRouterCacheProvider options={{ key: 'css' }}>
        tegasudgia
        {children}
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
