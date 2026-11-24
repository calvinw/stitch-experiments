import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CounterPage from "./pages/CounterPage";
import SessionsPage from "./pages/SessionsPage";
import SettingsPage from "./pages/SettingsPage";

function NotFound() {
  return (
    <div className="py-16 text-center text-on-surface-variant">
      <p className="font-headline-lg text-2xl text-on-surface">Page not found</p>
      <a className="mt-3 inline-block text-primary underline" href="#/">
        Return to the counter
      </a>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Header />
        <main className="flex-1 w-full pt-14 max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col">
          <Routes>
            <Route path="/" element={<CounterPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
