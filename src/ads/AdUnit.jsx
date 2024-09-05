import React, { useEffect } from "react";

const AdUnit = () => {
  useEffect(() => {
    // Load the Google AdSense script
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5956532376978126";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // After script is loaded, push the ad unit code
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-5956532376978126"
      data-ad-slot="9090199256"
    ></ins>
  );
};

export default AdUnit;
