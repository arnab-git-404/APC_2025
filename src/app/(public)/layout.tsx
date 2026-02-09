// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Toaster } from "react-hot-toast";
// import WorkshopBanner from "@/components/WorkshopBanner";
// // import "quill/dist/quill.snow.css";
// import "react-quill/dist/quill.snow.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <main>
//       <link
//         href="https://cdn.jsdelivr.net/npm/daisyui@5"
//         rel="stylesheet"
//         type="text/css"
//       />
//       <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

//       {/* <div className=""> */}
//       <Navbar />
//       {/* </div> */}
//       {/* <div className="pt-[80px]"> */}
//       <Toaster />
//       {children}
//       {/* </div> */}
//       <Footer />
//     </main>
//   );
// }



import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import WorkshopBanner from "@/components/WorkshopBanner";
// import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@5"
        rel="stylesheet"
        type="text/css"
      />
      <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

      <Navbar />
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[120px] md:h-[100px]"></div>
      
      <Toaster />
      {children}
      <Footer />
    </main>
  );
}