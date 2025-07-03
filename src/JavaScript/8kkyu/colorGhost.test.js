const Ghost = require ('./colorGhost');

test("Ghost color should be one of the allowed colors", () => {
  const allowed = ['white', 'yellow', 'purple', 'red'];
  
  for (let i = 0; i < 10; i++) {
    const ghost = new Ghost();
    expect(allowed).toContain(ghost.color);
  }
});

test("At least one color must be appeared", () => {
  const allowed = ['white', 'yellow', 'purple', 'red'];

  const colors = [];

  for (let i = 0; i < 200; i++) {
    const ghost = new Ghost();
    
    if (!colors.includes(ghost.color)) {
      colors.push(ghost.color);
      continue;
    }

    if (colors.length === allowed.length) break;
  }

  colors.forEach(color => {
    expect(allowed).toContain(color);
  })
})