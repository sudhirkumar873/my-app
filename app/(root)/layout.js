import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "../globals.css";

import LeftSidebar from "@components/layout/LeftSideBar";
import RightSidebar from "@components/layout/RightSideBar";
import MainContainer from "@components/layout/MainContainer";
import Topbar from "@components/layout/TopBar";
import ButtonBar from "@components/layout/BottomBar";

export const metadata = {
  title: "My-App",
  description: "Next 14 Socail Media App",
};
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-purple-2`}>
          <main className="flex flex-row">
            <LeftSidebar />
            <MainContainer>
              <Topbar />
              {children}
            </MainContainer>
            <RightSidebar />
          </main>
          <ButtonBar/>
        </body>
      </html>
    </ClerkProvider>
  );
}
