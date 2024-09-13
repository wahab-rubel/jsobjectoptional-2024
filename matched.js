const numbers = [45, 46, 47, 48, 49, 50, 51, 52, 53];

// for(let i = 0; i < numbers.length; i++){
//   const numbers2 = numbers[i];
//   console.log(numbers2);
// }

// for(const number of numbers){
//   console.log(number);
// }

const products = [
  {id: 1, name: 'walton phone', price: 19000},
  {id: 2, name: 'iphone', price: 19000},
  {id: 3, name: 'mac book air', price: 19000},
  {id: 4, name: 'lenove laptop', price: 19000},
  {id: 5, name: 'Dell inspiron laptop', price: 19000},
  {id: 6, name: 'Samsung phone note 7', price: 19000},
  {id: 7, name: 'Nokia old age phone gone', price: 19000},
  {id: 8, name: 'Phone one', price: 19000},
]

// for(const product of products){
//   console.log(product);
// }

function matchedProducts(products, search) {
  const matched =[];
  for(const product of products){
    if(product.name.includes(search)){
      matched.push(product);
    }
  }
  return matched;
}

const results = matchedProducts(products, 'phone');
console.log(results);