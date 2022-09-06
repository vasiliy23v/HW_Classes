/*
Create implementation of Invoices using OOP, using private and public properties.
Create two implementations, one using class command, one using old es5 implementation
    - base class Invoices
    - child AccountantInvoice
    - child CEOInvoice
    - child CustomerInvoice

    Создайте реализацию Invoices (Счета) с использованием ООП, используя приватные и публичные свойства.
Создайте две реализации, одну с использованием команды класса, другую с использованием старой реализации es5
    - базовый класс Invoices        || Счет
    - дочерний AccountantInvoice    || бухгалтерский
    - дочерний CEOInvoice главный   || администратор
    - child CustomerInvoice         || клиент / покупатель
*/
/*

class AccountantInvoice extends Invoices {
    constructor() {
        super(id, fullname, count, date);
    }

    writeDateInfo() {
        return `${this.count} , ${this.date}`

    }


}



class CEOInvoice extends Invoices {
    constructor(id, fullname, count, hasAccess = false) {
        super(id, fullname, count);
        this.hasAccess = hasAccess;
    }
    writeAllUsers() {
        
        Можно ли как-то посмотреть все созданые счета?
        
        For example:
        1, "Bill Gates", 1000
        2, "Brad Pitt", 3000
        3, "Mark Zuckerberg", 5000

        
    }
}

class CustomerInvoice extends Invoices {

}

let user1 = new CEOInvoice(1, "Bill Gates", "01.01.22", 1000, true);

//let user2 = new AccountantInvoice(true);

let user3 = new CustomerInvoice(2, "Brad Pitt", "05.05.22", 3000);
let user4 = new CustomerInvoice(3, "Mark Zuckerberg", "05.07.22", 5000);
*/



/*

class AccountantInvoice extends Invoices {
    constructor() {
        super(id, fullname, count, date);
    }

    writeDateInfo() {
        return `${this.count} , ${this.date}`

    }


}

/*

class AccountantInvoice extends Invoices {
    constructor() {
        super(id, fullname, count, date);
    }


}


*/




function Invoices(id, fullname, date, count = 0) {
    this.id = id;
    this.count = count;
    this.date = date;
    this.fullname = fullname;
}
Invoices.prototype.writeAllInfo = function () {
    return `${fullname} is user №${id} has ${count}$`;
};
Invoices.prototype.setCount = function () {
    return this.count = count;
};




function AccountantInvoice(id, fullname, date, count, hasAccess, taxes) {
    Invoices.call(this, count, date, fullname, id)
    this.taxes = taxes;
    this.hasAccess = hasAccess;
}
AccountantInvoice.prototype = Object.create(Invoices.prototype)
AccountantInvoice.prototype.constructor = AccountantInvoice;
AccountantInvoice.prototype = Object.assign(
    AccountantInvoice.prototype, {
    writeDateInfo: function () {
        return `${this.count} , ${this.date}`
    }
})



function CEOInvoice(id, fullname, date, count) {
    Invoices.call(this, count, date, fullname, id)
}
CEOInvoice.prototype = Object.create(Invoices.prototype)
CEOInvoice.prototype.constructor = CEOInvoice;
CEOInvoice.prototype = Object.assign(
    CEOInvoice.prototype, {
    writeShortInfo: function () {
        return `${this.count} , ${this.date}`
    }
})


function CustomerInvoice(id, fullname, date, count) {
    Invoices.call(this, count, date, fullname, id)
}
CEOInvoice.prototype = Object.create(Invoices.prototype)
CEOInvoice.prototype.constructor = CEOInvoice;
CEOInvoice.prototype = Object.assign(
    CEOInvoice.prototype, {
    writeShortInfo: function () {
        return `${this.count} , ${this.date}`
    }
})


let user1 = new CEOInvoice(1, "Bill Gates", "01.01.22", 1000, true);

//let user2 = new AccountantInvoice();

let user3 = new CustomerInvoice(2, "Brad Pitt", "05.05.22", 3000);
let user4 = new CustomerInvoice(3, "Mark Zuckerberg", "05.07.22", 5000);
