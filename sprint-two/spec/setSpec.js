describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    var item1 = {3 : 3};
    set.add(item1);
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
    expect(set.contains(item1)).to.equal(true);
    expect(set.contains({3 : 3})).to.equal(false);
  });

  it('should remove values from a set', function() {
    var item1 = {3 : 3};
    set.add(item1);
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    set.remove(item1);
    
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(item1)).to.equal(false);
  });

});
