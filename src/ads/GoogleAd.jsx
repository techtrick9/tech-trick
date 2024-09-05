import React, { useEffect } from "react";

const GoogleAd = () => {
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || [];
    adsbygoogle.push({});
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5956532376978126"
        data-ad-slot="9186897012"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5956532376978126"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
};

export default GoogleAd;
