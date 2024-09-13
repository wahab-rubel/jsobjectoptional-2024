const student = {
  name: "wahab",
  id: 15242,
  isSingle: true,
  friend:['apu', 'chopu', 'kopu', 'salman'],
  movies: [{name: 'no 1', year: 2011}, {name: 'no 1', year: 2051}, {name:'no 1', year: 2020}],
  act: function(){
    console.log('act king khan shakib khan')
  },
  car: {
    brand: 'tesla',
    price: 50000000,
    made: 2025,
    manufacture: {
      name: 'tesla',
      ceo: 'Elon Mask',

    }
  }
}
console.log(student.act);
student.act();