introJs()
  .setOptions({
    steps: [
      {
        element: document.getElementById("rule"),
        title: "Step 1",
        intro: "Read the rules carefully",
      },
      {
        element: document.getElementById("option"),
        title: "Step 2",
        intro: "Choose your favorite types on calculation",
      },
      {
        element: document.getElementById("margin"),
        title: "Step 3",
        intro: "Choose your margin of error",
      },
      {
        element: document.getElementById("button-tool-wr"),
        title: "Step 4",
        intro: "Press the Start button to begin",
      },
      {
        element: document.getElementById("res-1"),
        title: "Step 5",
        intro:
          "Type your answer and press ENTER to submit. Use the US-Standard separator (E.g: 1,000.00)",
      },
    ],
    tooltipClass: "intro-boxes",
    skipLabel: "Skip",
    showProgress: false,
    showBullets: false,
    disableInteraction: true,
    exitOnOverlayClick: true,
  })
  .start();
