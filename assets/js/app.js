let number = +prompt('Введите число:');
console.log(`Заданное число: ${number}`);

let flag = true;

for(let i = 2; i < number; i ++){

    if(number % i == 0) {
        alert(`Число ${number} не простое.`);
        flag = false;
        break;
    }
}

if(flag) {
    alert(`Число ${number} простое.`);
}