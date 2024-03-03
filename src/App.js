import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Montserrat', sans-serif",
    primaryColor: "#FAEBB5",
    secondaryColor: "#774F86",
    accentColor: "#F67F7B",
    header: {
      deadLine: { label: "Deadline:", date: "05 March " },
      companyName: "Larana, Inc",
    },
    heading: {
      heading1: "We're",
      heading2: "Hiring",
    },
    postName: "Content Creator",
    sendCv: {
      label: "Send your CV to",
      link: "reallygreatsite.com",
    },
    link: "reallygreatsite.com",
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.primaryColor,
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
