import { Header } from "../components/Header/Header";
import { Search } from "../components/Search/Search";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { ClientProviders } from "./providers";

export default function Home() {
  const username = "hacksore";
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <ClientProviders>
          <>
            <Header />
            <Search />
          </>
        </ClientProviders>
      </div>
    </main>
  );
}
