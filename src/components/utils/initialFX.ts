import { TextSplitter } from "../../utils/textSplitter";
import gsap from "gsap";
import { lenis } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  if (lenis) {
    lenis.start();
  }
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a1410",
    duration: 0.5,
    delay: 1,
  });

  const introSelectors = [".landing-info h3", ".landing-intro h2"];
  const elements = introSelectors.flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (elements.length) {
    const landingText = new TextSplitter(elements, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    gsap.fromTo(
      landingText.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.3,
      }
    );
  }

  const nameHeading = document.querySelector(".landing-intro h1");
  if (nameHeading) {
    gsap.fromTo(
      nameHeading,
      { opacity: 0, y: 40, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.inOut",
        delay: 0.35,
      }
    );
  }

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  const roleElements = [".landing-role--primary", ".landing-role"].flatMap((selector) =>
    Array.from(document.querySelectorAll(selector))
  );

  if (roleElements.length) {
    const landingRoles = new TextSplitter(roleElements, TextProps);
    gsap.fromTo(
      landingRoles.chars,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        duration: 1.2,
        filter: "blur(0px)",
        ease: "power3.inOut",
        y: 0,
        stagger: 0.025,
        delay: 0.5,
      }
    );
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
