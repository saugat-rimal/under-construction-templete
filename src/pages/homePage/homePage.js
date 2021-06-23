import React, { useEffect } from "react";
import anime from "animejs";
import { SocialCard } from "../../components/common";

function HomePage() {
  useEffect(() => {
    let tl = anime.timeline({
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 800
    });

    tl.add({
      targets: ".wrapper .reveal",
      translateY: -200,
      delay: 1200,
      opacity: 0
    })
      .add({
        targets: ".wrapper .second",
        translateY: -200,
        opacity: 1
      })
      .add({
        targets: ".wrapper .socials a",
        translateY: -180,
        delay: function(el, i) {
          return i * 100;
        },
        opacity: 1,
        easing: "easeOutQuad"
      });
  });

  return (
    <div className="App">
      <div class="wrapper">
        <div class="reveal">
          <h1>Hi, I am Saugat Rimal</h1>
        </div>
        <div class="second">
          <h1>This is Under Construction Page</h1>
          <p>&lt; Source Code In Github  &gt;</p>
        </div>
        <SocialCard />
      </div>
    </div>
  );
}

export default HomePage;
