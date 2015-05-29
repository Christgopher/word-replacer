describe('wordReplacer', function() {
  it("deletes all the instances of a word", function() {
    expect(wordReplacer("hello my old friends", "old",
    "")).to.eql("hello my friends")
  });

  it("replaces all the instances of a word", function() {
    expect(wordReplacer("hello my old friends", "old", "new")).to.eql("hello my new friends")
  });

  it("works with commas", function() {
    expect(wordReplacer("hello, charles, my old friend", "charles", "matthew")).to.eql("hello, matthew, my old friend")
  });
});
