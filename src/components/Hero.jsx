import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  /* ================= Scroll Down ================= */
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  /* ================= Mouse Glow Effect ================= */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* ================= Code Rain Effect ================= */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const chars =
      "01ABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]<>()/\\$%*@#!アイウエオカキクケコサシスセソタチツテトナニヌネノ".split(
        ""
      );

    let width, height;
    let columns;
    let drops = [];
    let animationFrameId;

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      columns = Math.floor(width / 25);
      drops = [];

      for (let i = 0; i < columns; i++) {
        drops[i] = {
          y: Math.random() * -height,
          speed: 0.5 + Math.random() * 2,
        };
      }
    };

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = '16px "Courier New", monospace';

      drops.forEach((drop, i) => {
        const char =
          chars[Math.floor(Math.random() * chars.length)];

        const x = i * 25;
        const y = drop.y;

        ctx.fillStyle = "rgba(56,189,248,0.35)";
        ctx.fillText(char, x, y);

        drop.y += drop.speed;

        if (drop.y > height) {
          drop.y = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    initCanvas();
    draw();

    const handleResize = () => initCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
        sx={{
        position: "fixed",
        inset: 0,
        height: "100vh",
        width: "100%",
        zIndex: -1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(0, 30, 255, 0.25), transparent 35%),
          linear-gradient(135deg,#0f172a,#020617,#000000)
        `,
        color: "#fff",
      }}
    >
      {/* Code Rain Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          opacity: 0.4,
          zIndex: 1,
        }}
      />

      {/* Grid Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      {/* Floating Code */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "8%",
          fontFamily: "monospace",
          fontSize: "13px",
          color: "#38bdf8",
          opacity: 0.15,
          whiteSpace: "pre",
          animation: "floatSlow 18s ease-in-out infinite",
          zIndex: 2,
        }}
      >
{`function buildFuture() {
  return "AediaX Intelligence";
}`}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 850,
          px: 3,
          zIndex: 3,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            letterSpacing: 1,
            background:"white",
            backgroundSize: "300% 300%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 8s ease infinite",
            textShadow: "0 0 30px rgba(56,189,248,0.3)",
          }}
        >
          Engineering Digital Intelligence
        </Typography>

        <Typography
          sx={{
            mt: 3,
            fontSize: "1.15rem",
            color: "#94a3b8",
            lineHeight: 1.9,
          }}
        >
          AediaX Blog explores AI systems, scalable architectures,
          cloud engineering, and modern development strategies powering
          tomorrow's digital world.
        </Typography>

        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: 5,
            px: 5,
            py: 1.6,
            borderRadius: "999px",
            fontWeight: 700,
            textTransform: "none",
            background: "linear-gradient(135deg,#2563eb,#4f46e5)",
            color: "#fff",
            boxShadow: "0 15px 50px rgba(37,99,235,0.45)",
            transition: "0.4s",
            "&:hover": {
              transform: "translateY(-5px) scale(1.05)",
              boxShadow: "0 25px 70px rgba(99,102,241,0.75)",
            },
          }}
        >
          Read Latest Articles
        </Button>
      </Box>

      {/* Scroll Mouse */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: 3,
        }}
      >
        <Box
          onClick={handleScrollDown}
          sx={{
            width: 28,
            height: 45,
            border: "2px solid #64748b",
            borderRadius: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            p: 1,
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
              borderColor: "#38bdf8",
              boxShadow: "0 0 20px rgba(56,189,248,0.5)",
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              backgroundColor: "#38bdf8",
              borderRadius: 2,
              animation: "scrollAnim 2s infinite",
            }}
          />
        </Box>
      </Box>

      {/* Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatSlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
          100% { transform: translateY(0px); }
        }

        @keyframes scrollAnim {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
