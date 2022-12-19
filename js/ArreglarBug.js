export function solution(cars) {
  // 👇 Este es el código que no funciona
  return cars.map(function (car) {
    if (car.licensePlate) {
      return true;
    } else {
      return false;
    }
  });
}

const cars = [
    {
      color: 'red',
      brand: 'Kia',
    },
    {
      color: 'gray',
      brand: 'Chevrolet',
      licensePlate: 'AAA111',
    },
    {
      licensePlate: 'RGB255',
    },
  ];
  
console.log(solution(cars));