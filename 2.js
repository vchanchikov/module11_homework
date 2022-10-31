function primeCheck (a) {
    if (a >= 0 && a <= 1000) {
        if (a === 0) {
            console.log('0 - не является натуральным числом и соответственно простым');
        } else if (a === 1) {
            console.log('1 - не является простым числом');
        } else {
            let counter = 0;
            for (let i = 2; i < a; i++) {
                if (a % i === 0) {
                    counter++; 
                }
            };
            if (counter === 0) {
                console.log('Простое число');
            } else {
                console.log('Число не является простым');
            }
        }
    } else {
        console.log('Данные неверны');
    }
}

primeCheck();