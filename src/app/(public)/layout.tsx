import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar />
      <Toaster />
      {children}
      <Footer />
    </main>
  );
}
