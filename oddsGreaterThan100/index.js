// Return an odd number greater than 100.

function oddsGreaterThan100(num) {
  if(num < 0)
    num = 0 - num;
  if(num < 100)
    num += 100;
  if(num%2=== 0)
    num += 1;
  return num;
}
const complexity = {
	"time": "O(1)",
	"space": "O(1)"
};

loadScript(oddsGreaterThan100,complexity);
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

describe("oddsGreaterThan100", () => {
  it("returns an odd number.", () => {
    const res = oddsGreaterThan100(13);
    assert.equal(typeof res, "number");
    assert.equal(res % 2 !== 0, true);
  });
  it("returns a number greater than 100.", () => {
    const res = oddsGreaterThan100(10);
    assert.equal(typeof res, "number");
    assert.equal(res > 100, true);
  });
  it("returns a negative number greater than 100.", () => {
    const res = oddsGreaterThan100(-10);
    assert.equal(typeof res, "number");
    assert.equal(res > 100, true);
  });
});

mocha.run();
