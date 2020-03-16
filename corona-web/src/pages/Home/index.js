import React, { useState } from 'react'
import MapChart from '../../components/MapChart'
import ReactTooltip from "react-tooltip";

export default () => {
    const [content, setContent] = useState("");
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
  }