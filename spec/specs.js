describe("wordFindReplace", function() {
  it('returns "Hello Universe" for a string entered with "Universe" replaced with "World"', function() {
    expect(wordFindReplace("Hello Universe", "Universe", "World")).to.equal("Hello World");
  });

  it('returns "Chris is a smelly man" for a string entered with "silly boy" replaced with "smelly man"', function() {
    expect(wordFindReplace("Chris is a silly boy", "silly boy", "smelly man")).to.equal("Chris is a smelly man");
  });
});
