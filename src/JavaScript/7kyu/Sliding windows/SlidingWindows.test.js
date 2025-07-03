const window = require ('./SlidingWindows');

test("window foo must give correct result", () => {
  const result = window(3, 1, [ 0, 1, 2 ]);
  
  expect([ [ 0, 1, 2 ] ]).toEqual(result);
});

test("window foo must give correct result when length is 0", () => {
  const result = window(0,1,[0,1,2]);
  
  expect([ [], [], [], [] ]).toEqual(result);
});

test("window foo must give correct result", () => {
  const result = window(2, 1, [0,1,2,3,4]);
  
  expect([ [0,1], [1,2], [2,3], [3,4] ]).toEqual(result);
});
