import TopBar from "../components/topbar";
import Hotel from "../components/hotel";
import SelectBox from "../components/selectBox";
import Journey from "../components/journey";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Root() {
  const result = useLocation();
  const [selectedCheckbox, setSelectedCheckbox] = useState("site");

  const handleCheckboxChange = (name) => {
    setSelectedCheckbox(name);
  };

  return (
    <>
      <TopBar />
      <SelectBox onCheckboxChange={handleCheckboxChange} />
      {selectedCheckbox === "site" && (
        <Journey result={result.state.message} />
      )}
      {selectedCheckbox === "hotel" && (
        <Hotel result={result.state.message} />
      )}
      <div id="topbar"></div>
      <div id="detail"></div>
    </>
  );
}
