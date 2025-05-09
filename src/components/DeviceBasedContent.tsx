"use client";
import {useState, useEffect} from "react";
export default function DeviceBasedContent() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
    setIsMobile(mobile);

    if (mobile) {
      window.location.href = "https://onchaingm.com";
    }
  }, []);

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return null;
  }

  return (
    <iframe
      src="https://onchaingm.com"
      style={{
        width: "100%",
        height: "100vh",
        border: "none",
      }}
      title="OnChainGM"
    />
  );
}
