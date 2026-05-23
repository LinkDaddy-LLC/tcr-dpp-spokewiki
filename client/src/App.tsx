import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import WikiHomePage from "./pages/WikiHomePage";
import WikiArticlePage from "./pages/WikiArticlePage";
import EUESPRPage from "./pages/EUESPRPage";
import BatteryPassportPage from "./pages/BatteryPassportPage";
import TextileTraceabilityPage from "./pages/TextileTraceabilityPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={WikiHomePage} />
      <Route path={"/wiki"} component={WikiHomePage} />
      <Route path={"/wiki/:slug"} component={WikiArticlePage} />
      <Route path={"/eu-espr"} component={EUESPRPage} />
      <Route path={"/battery-passport"} component={BatteryPassportPage} />
      <Route path={"/textile-traceability"} component={TextileTraceabilityPage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
