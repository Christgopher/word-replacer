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

  it("works with colons", function() {
    expect(wordReplacer("hello: charles, my old friend", "hello", "greetings")).to.eql("greetings: charles, my old friend")
  });

  it("works with period", function() {
    expect(wordReplacer("hello, charles, my old friend.", "friend", "enemy")).to.eql("hello, charles, my old enemy.")
  });

  it("works with capitols", function() {
    expect(wordReplacer("hello Hello HELLO sup", "hello", "boom")).to.eql("boom boom boom sup")
  });
});
