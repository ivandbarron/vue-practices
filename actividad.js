function get_key_repetitions(array) {
  return array
    .reduce((acc, elem) => elem in acc? acc[elem]++ && acc : (acc[elem] = 1) && acc, {})
} 


function find_non_paired(array) {
  let key_counter = get_key_repetitions(array)
  
  result = [null, -1]
  Object.keys(key_counter).forEach(key => {
    if (key_counter[key] == 1) {
      result = [key, array.indexOf(Number(key))]
    }
  })

  return result
}


function to_is_pair_struct_list(array) {
  let key_counter = get_key_repetitions(array)
  
  let make_obj = (number, pair) =>  ({number: Number(number), pair: pair})

  result = []
  Object.keys(key_counter).forEach(key => {
    [qtty, pair] = key_counter[key] == 1? [1, false] : [key_counter[key] /= 2, true]
    
    for (i = 0; i < qtty; i++) {
      result.push(make_obj(key, pair))
    }
  })
  
  return result
}

const A = [9, 3, 9, 3, 9, 7, 9]
console.log(`Elemento sin par e indice en el arreglo: ${find_non_paired(A)}`)
console.log(`Arreglo de jsons indicando si tiene par o no: ${JSON.stringify(to_is_pair_struct_list(A))}`)
