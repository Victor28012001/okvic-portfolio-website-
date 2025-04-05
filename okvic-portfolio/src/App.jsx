import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { ReactTyped } from "react-typed";
import Experiences from "./components/Experiences";
import ToggleSections from "./components/ToggleSections";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import CanvasLoader from "./components/Loader";

function App() {
  const [showClone, setShowClone] = useState(false);
  const [showClones, setShowClones] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [seatRotating, setSeatRotating] = useState(false);
  const [showSections, setShowSections] = useState(true);

  const goToNextSection = () => {
    setSectionIndex((prev) => {
      const nextIndex = Math.min(prev + 1, 3);
      if (nextIndex === 1) setShowClone(false);
      if (nextIndex === 2) setShowClones(true);
      return nextIndex;
    });
  };

  const goToPreviousSection = () => {
    setSectionIndex((prev) => {
      const prevIndex = Math.max(prev - 1, 0);
      if (prevIndex === 0) setShowClone(true);
      if (prevIndex === 1) setShowClone(false);
      if (prevIndex === 2) setSeatRotating(false);

      return prevIndex;
    });
  };

  useEffect(() => {
    setShowClone(true);
  }, []);

  useEffect(() => {
    if (seatRotating) {
      goToNextSection();
    }
  }, [seatRotating]);

  return (
    <>
      <ToggleSections
        onToggle={() => setShowSections((prev) => !prev)}
        isOpen={showSections}
      />

      {showSections && (
        <>
          {sectionIndex === 0 && (
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "10px",
                padding: "10px",
                width: "50vw",
                height: "40vh",
                borderRadius: "16px",
                zIndex: 1000,
                color: "#000",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full text-white flex flex-col justify-around items-left p-10">
                <h1 className="text-4xl font-bold text-white">
                  Am Victor, A{" "}
                  <ReactTyped
                    strings={[
                      "3D Artist",
                      "Solana Web3 Developer",
                      "Fullstack Engineer",
                      "Game Developer",
                    ]}
                    typeSpeed={100}
                    loop
                    backSpeed={20}
                    cursorChar="|"
                    showCursor={true}
                  />
                </h1>
                <p className="text-white text-left p-5">
                  I'm a Nigerian Software Developer with over six years of
                  experience in the tech industry. My journey has taken me
                  through web development, Web3 solutions, game development, and
                  3D modeling. Currently, I work as a freelance Fullstack
                  Engineer—straight from my room in Awka, Nigeria (yes, really!
                  😂). I'm always open to exciting collaborations, so let's
                  build something awesome together!
                </p>
                <div className="w-[25%] p-5 flex justify-center items-center min-h-[40px]">
                  <button
                    className="rounded-md px-6 py-3 flex items-center justify-center border border-slate-300 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800"
                    type="button"
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    onClick={() => {
                      setShowClone(false);
                      goToNextSection();
                    }}
                  >
                    <img
                      src="favicon.png"
                      alt="logo"
                      className="h-5 w-5 mr-2"
                    />
                    Continue Into My World
                  </button>
                </div>
              </div>
            </div>
          )}

          {sectionIndex === 1 && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "10px",
                padding: "10px",
                width: "60vw",
                height: "90vh",
                borderRadius: "16px",
                zIndex: 1000,
                color: "#000",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full text-white flex flex-col justify-between items-left p-10">
                <h1 className="text-4xl font-bold text-white">Experiences</h1>
                <div className="h-[70%] w-full flex flex-col justify-around items-left p-5">
                  <Experiences />
                </div>
                <div className="w-[50%] p-5 flex justify-center items-center min-h-[40px] gap-4">
                  <button
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    className="rounded-md px-6 py-3 border border-slate-300 text-sm text-slate-600 hover:text-white hover:bg-slate-800"
                    onClick={goToPreviousSection}
                  >
                    ← Back
                  </button>
                  <button
                    className="rounded-md px-6 py-3 flex items-center justify-center border border-slate-300 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800"
                    type="button"
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    onClick={goToNextSection}
                  >
                    <img
                      src="favicon.png"
                      alt="logo"
                      className="h-5 w-5 mr-2"
                    />
                    View My Portfolio
                  </button>
                </div>
              </div>
            </div>
          )}

          {sectionIndex === 2 && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "10px",
                padding: "10px",
                width: "60vw",
                height: "90vh",
                borderRadius: "16px",
                zIndex: 1000,
                color: "#000",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full text-white flex flex-col justify-between items-left p-10">
                <h1 className="text-4xl font-bold">Portfolio</h1>
                <div className="h-[70%] p-5">
                  <Portfolio />
                </div>
                <div className="flex justify-between">
                  <button
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    className="rounded-md px-6 py-3 border border-slate-300 text-sm text-slate-600 hover:text-white hover:bg-slate-800"
                    onClick={goToPreviousSection}
                  >
                    ← Back
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    className="rounded-md px-6 py-3 border border-slate-300 text-sm text-slate-600 hover:text-white hover:bg-slate-800 flex items-center justify-around"
                    onClick={() => {
                      setSeatRotating(true);
                      // goToNextSection()
                    }}
                  >
                    <img
                      src="favicon.png"
                      alt="logo"
                      className="h-5 w-5 mr-2"
                    />
                    <span>Contact Me</span>
                    {/* → */}
                  </button>
                </div>
              </div>
            </div>
          )}

          {sectionIndex === 3 && (
            <div
              style={{
                position: "absolute",
                top: "20px",
                right: "10px",
                padding: "10px",
                width: "60vw",
                height: "90vh",
                borderRadius: "16px",
                zIndex: 1000,
                color: "#000",
                background: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <div className="w-full h-full text-white flex flex-col justify-between items-left p-10">
                <h1 className="text-4xl font-bold">Contact</h1>
                <div className="h-[70%] p-5">
                  <Contact />
                </div>
                <div className="flex justify-between">
                  <button
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    className="rounded-md px-6 py-3 border border-slate-300 text-sm text-slate-600 hover:text-white hover:bg-slate-800"
                    onClick={goToPreviousSection}
                  >
                    ← Back
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      transition: "all 0.15s ease 0s",
                      padding: "6px",
                      gap: "3px",
                    }}
                    className="rounded-md px-6 py-3 border border-slate-300 text-sm text-slate-600 hover:text-white hover:bg-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? "Close Door" : "Open Door"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      <Navbar />
      <Canvas shadows camera={{ position: [10, 22, 45], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Suspense fallback={<CanvasLoader />}>
          <Experience
            showClone={showClone}
            showClones={showClones}
            isOpen={isOpen}
            seatRotating={seatRotating}
            sectionIndex={sectionIndex}
          />
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
