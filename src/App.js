import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* Sidebar Component: Displays navigation links */}
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* Topbar Component: Contains app title and sidebar toggle button */}
            <Topbar setIsSidebar={setIsSidebar} />
            {/* Routes Component: Defines routing for different pages */}
            <Routes>
              {/* Dashboard Route: Displays dashboard content */}
              <Route path="/" element={<Dashboard />} />
              {/* Team Route: Displays team-related content */}
              <Route path="/team" element={<Team />} />
              {/* Contacts Route: Displays contact information */}
              <Route path="/contacts" element={<Contacts />} />
              {/* Invoices Route: Displays invoice information */}
              <Route path="/invoices" element={<Invoices />} />
              {/* Form Route: Displays form for data input */}
              <Route path="/form" element={<Form />} />
              {/* Bar Chart Route: Displays bar chart */}
              <Route path="/bar" element={<Bar />} />
              {/* Pie Chart Route: Displays pie chart */}
              <Route path="/pie" element={<Pie />} />
              {/* Line Chart Route: Displays line chart */}
              <Route path="/line" element={<Line />} />
              {/* FAQ Route: Displays frequently asked questions */}
              <Route path="/faq" element={<FAQ />} />
              {/* Calendar Route: Displays calendar */}
              <Route path="/calendar" element={<Calendar />} />
              {/* Geography Route: Displays geographical data */}
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
