class CalculatorWithSign {
    constructor() {
        this.sign=undefined;
    }

    work(sign_) {
        this.sign=sign_;
    }
    calculate(v1,v2) {
        if(this.sign==='+') {
            return v1+v2;
        }
        else if(this.sign==='-') {
            return v1-v2;
        }
        else if(this.sign==='*') {
            return v1*v2;
        }
        else if(this.sign==='/') {
            return v1/v2;
        }
        else if(this.sign==='%') {
            return v1%v2;
        }
        else {
            return 'lmao idk';
        }
    }
}

module.exports = CalculatorWithSign;