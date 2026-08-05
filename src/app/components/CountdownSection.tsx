"use client";

import React, { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-10-01T00:00:00+07:00").getTime();

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = TARGET_DATE - now;

  if (diff <= 0) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  // Calculate months and remaining days properly
  const nowDate = new Date(now);
  const targetDate = new Date(TARGET_DATE);

  let months =
    (targetDate.getFullYear() - nowDate.getFullYear()) * 12 +
    (targetDate.getMonth() - nowDate.getMonth());

  // Create a date that is `months` months from now
  const tempDate = new Date(nowDate);
  tempDate.setMonth(tempDate.getMonth() + months);

  // If tempDate overshoots target, subtract one month
  if (tempDate.getTime() > TARGET_DATE) {
    months--;
    tempDate.setMonth(tempDate.getMonth() - 1);
  }

  const remainingMs = TARGET_DATE - tempDate.getTime();
  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remainingMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingMs % (1000 * 60)) / 1000);

  return { months, days, hours, minutes, seconds };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const displayValue = String(value).padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "clamp(72px, 12vw, 120px)",
          height: "clamp(80px, 13vw, 130px)",
          borderRadius: "16px",
          background: "linear-gradient(145deg, #1A1A1A 0%, #2D2D2D 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Decorative line in the middle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            zIndex: 1,
          }}
        />
        {/* Subtle glow on top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "2px",
            background:
              "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
            borderRadius: "2px",
          }}
        />
        <span
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            fontFamily: "'Inter', 'Segoe UI', sans-serif",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            position: "relative",
            zIndex: 2,
          }}
        >
          {displayValue}
        </span>
      </div>
      <span
        style={{
          fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
          fontWeight: 600,
          color: "#6B7280",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        paddingBottom: "2rem",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary)",
          animation: "countdownPulse 1.5s ease-in-out infinite",
        }}
      />
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary)",
          animation: "countdownPulse 1.5s ease-in-out infinite 0.3s",
        }}
      />
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // SSR-safe: show nothing until hydrated
  if (!timeLeft) {
    return (
      <section
        id="countdown"
        style={{
          padding: "5rem 2rem",
          backgroundColor: "#FFFCF7",
          minHeight: "400px",
        }}
      />
    );
  }

  const isFinished =
    timeLeft.months === 0 &&
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <>
      <style>{`
        @keyframes countdownPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes countdownFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>

      <section
        id="countdown"
        style={{
          padding: "5rem 2rem",
          backgroundColor: "#FFFCF7",
          position: "relative",
          overflow: "hidden",
          animation: "countdownFadeIn 0.8s ease-out",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,209,102,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(162,210,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Label badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          {/* <span
            style={{
              display: "inline-block",
              background:
                "linear-gradient(135deg, var(--color-primary), #FFB347)",
              color: "#1A1A1A",
              padding: "0.4rem 1.25rem",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          ></span> */}
        </div>

        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            marginBottom: "0.5rem",
            textAlign: "center",
            color: "#1A1A1A",
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          Menuju Aethera - SILO UISI 2026
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6B7280",
            fontSize: "0.95rem",
            marginBottom: "3rem",
            maxWidth: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          1 Oktober 2026 — Bersiaplah untuk perjalanan menuju cahaya paling
          murni.
        </p>

        {isFinished ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, var(--color-primary), #FF6B6B)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              🎉 PKKMB Aethera Dimulai!
            </h3>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "clamp(0.5rem, 2vw, 1.25rem)",
              flexWrap: "wrap",
            }}
          >
            <CountdownUnit value={timeLeft.months} label="Bulan" />
            <Separator />
            <CountdownUnit value={timeLeft.days} label="Hari" />
            <Separator />
            <CountdownUnit value={timeLeft.hours} label="Jam" />
            <Separator />
            <CountdownUnit value={timeLeft.minutes} label="Menit" />
            <Separator />
            <CountdownUnit value={timeLeft.seconds} label="Detik" />
          </div>
        )}

        {/* Bottom decorative line */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "3px",
              borderRadius: "2px",
              background:
                "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
