'use strict'
class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        if (!this.isValidZnak(znak)) {
            console.log('Invalid operation sign.');
            return;
        }
        
        const confirmation = confirm(`Do you want to perform the action ${znak} with ${X} and ${Y}?`);
        if (confirmation) {
            console.log(this.calculate(X, Y, znak));
            let h1 = document.createElement('h1');
            h1.textContent = this.calculate(X, Y, znak);
            document.querySelector('body').append(h1);
        } else {
            this.input();
        }
    }

    input() {
        let X = this.getValidNumber('Enter X:');
        let Y = this.getValidNumber('Enter Y:');
        let znak = prompt('Enter the operation sign (+, -, /, *, %):');

        while (!this.isValidZnak(znak)) {
            znak = prompt('Invalid operation sign. Enter a valid operation sign (+, -, /, *, %):');
        }

        this.check({ X, Y, znak });
    }

    isValidZnak(znak) {
        return ['+', '-', '/', '*', '%'].includes(znak);
    }

    getValidNumber(message) {
        let num;
        do {
            num = parseFloat(prompt(message));
        } while (isNaN(num));
        return num;
    }

    calculate(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '*':
                return X * Y;
            case '/':
                return X / Y;
            case '%':
                return X % Y;
            default:
                return 'Unknown operation';
        }
    }
}

const obj = { X: 12, Y: 3, znak: '/' };
const superMath = new SuperMath();
superMath.check(obj);
