import type { Metadata } from 'next';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Chatbot from '../components/ChatBot/ChatBot';
import './globals.css';

export const metadata: Metadata = {
  title: 'INDIAN BIOLOGICALS',
  description: 'Indian Biologicals PVT Ltd - Healthcare solutions in Women\'s Health, Infertility, and Wellness',
  icons: {
    icon: '/IB-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

