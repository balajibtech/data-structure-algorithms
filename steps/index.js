// Write a function that takes a number N.
// Over multiple lines it should console log a step shape
// with N levels using the # character. Be sure to notice
// how each step has some number of empty spaces to the right!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // Solution 1:
  for(let i=1; i<=n; i++) {
    let step = "";
    for(let j=0; j<i; j++) {
      step += "#";
    }
    for(let k=0; k<n-i; k++) {
      step += " ";
    }
    console.log(step);
  }

  // Solution 2:
  // for(let i=1; i<=n; i++) {
  //   let step = "#".repeat(i);
  //   step += " ".repeat(n-i);
  //   console.log(step);
  // }
}

//Time complexity: O(N^2), Both Inner and Outer loop For loops run N times.
const complexity = {
  "time": "O(N^2), Both Inner and Outer loop For loops run N times.",
  "space": ""
};

loadScript(steps,complexity);

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;
console.log = sinon.spy();

describe("Steps", () => {
  it("steps() works", () => {
    steps(3);
    assert.equal(console.log.callCount, 3);
    assert.equal(console.log.getCall(0).args[0], "#  ");
    assert.equal(console.log.getCall(1).args[0], "## ");
    assert.equal(console.log.getCall(2).args[0], "###");
  });
});

mocha.run();
