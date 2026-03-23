import { useRef, useEffect, useState } from "react";

function TabSwitcher({ activeTab, onTabChange }) {
  const resourcesRef = useRef(null);
  const packagesRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0 });
  const [isPackages, setIsPackages] = useState(activeTab === "packages");
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const activeRef = activeTab === "resources" ? resourcesRef : packagesRef;
    if (!activeRef.current) return;
    const btn = activeRef.current;
    setIndicatorStyle({ width: btn.offsetWidth, left: btn.offsetLeft, opacity: 1 });
    setIsPackages(activeTab === "packages");
  }, [activeTab, isMobile]);

  useEffect(() => {
    const activeRef = activeTab === "resources" ? resourcesRef : packagesRef;
    if (!activeRef.current) return;
    const btn = activeRef.current;
    setIndicatorStyle({ width: btn.offsetWidth, left: btn.offsetLeft, opacity: 1 });
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const indicatorBg = isPackages
    ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
    : "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)";

  const indicatorShadow = isPackages
    ? "0 2px 8px rgba(16,185,129,0.35), 0 1px 0 rgba(255,255,255,0.2) inset"
    : "0 2px 8px rgba(245,158,11,0.35), 0 1px 0 rgba(255,255,255,0.2) inset";

  return (
    <div style={{
      width: "100%",
      padding: "0 16px",
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
    }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          background: "linear-gradient(135deg, #f1f5f9 0%, #e8edf2 100%)",
          borderRadius: "100px",
          padding: "4px",
          gap: "2px",
          boxShadow: "0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 16px rgba(0,0,0,0.08)",
          border: "1px solid rgba(0,0,0,0.07)",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        {/* Sliding indicator */}
        <div
          style={{
            position: "absolute",
            top: 4,
            height: "calc(100% - 8px)",
            borderRadius: "100px",
            background: indicatorBg,
            boxShadow: indicatorShadow,
            width: indicatorStyle.width,
            left: indicatorStyle.left,
            opacity: indicatorStyle.opacity,
            transition: mounted
              ? "left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1), background 0.28s ease, box-shadow 0.28s ease"
              : "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Resources tab */}
        <button
          ref={resourcesRef}
          onClick={() => onTabChange("resources")}
          style={{
            position: "relative",
            zIndex: 1,
            padding: isMobile ? "7px 14px" : "7px 18px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 600,
            letterSpacing: "0.01em",
            background: "transparent",
            color: activeTab === "resources" ? "#fff" : "#94a3b8",
            whiteSpace: "nowrap",
            transition: "color 0.22s ease",
          }}
        >
          {isMobile ? "Resources" : "Individual Resources"}
        </button>

        {/* Packages tab */}
        <button
          ref={packagesRef}
          onClick={() => onTabChange("packages")}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: isMobile ? "7px 14px" : "7px 18px",
            borderRadius: "100px",
            border: "none",
            cursor: "pointer",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 600,
            letterSpacing: "0.01em",
            background: "transparent",
            color: activeTab === "packages" ? "#fff" : "#94a3b8",
            whiteSpace: "nowrap",
            transition: "color 0.22s ease",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 20 20"
            fill="currentColor"
            style={{
              flexShrink: 0,
              opacity: activeTab === "packages" ? 1 : 0.5,
              transition: "opacity 0.22s ease",
            }}
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          {isMobile ? "Packages" : "Packages (Save More)"}
        </button>

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;600;700&display=swap');
        `}</style>
      </div>
    </div>
  );
}

export default TabSwitcher;