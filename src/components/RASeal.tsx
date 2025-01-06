import { useEffect } from "react";

const RASeal = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");

    // Set script attributes
    script.src = "https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js";
    script.id = "ra-embed-verified-seal";
    script.type = "text/javascript";
    script.async = true;
    script.dataset.id = "SlJEWTdQa3hhcjJyNTMtVjpmYWNpbGl0eXBheQ==";
    script.dataset.target = "ra-verified-seal";
    script.dataset.model = "1";

    // Append the script to the div
    const targetDiv = document.getElementById("ra-verified-seal");
    if (targetDiv) {
      targetDiv.appendChild(script);
    }

    // Clean up the script when the component unmounts
    return () => {
      if (targetDiv) {
        targetDiv.removeChild(script);
      }
    };
  }, []);

  return <div id="ra-verified-seal"></div>;
};

export default RASeal;
