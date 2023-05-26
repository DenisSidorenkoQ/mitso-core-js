/* eslint-disable */
class Product {
    id;
    name;
    UPC;
    creator;
    cost;
    storageTime;
    count;

    constructor(id, name, UPC, creator, cost, storageTime, count) {
        if (id > 0, name !== '', UPC !== 0, creator !== '', cost > 0, storageTime > 0, count > 0) {
            this.id = id;
            this.name = name;
            this.UPC = UPC;
            this.creator = creator;
            this.cost = cost;
            this.storageTime = storageTime;
            this.count = count;
        }
    }

  getCost() {
    console.log(this.cost);
  }
}

prod = new Product(1, 'German', 101, 'JavaScript', 300, 123, 202);

prod.getCost();

productArray = [
    new Product(1, 'German', 101, 'JavaScript', 300, 123, 202),
    new Product(2, 'Boris', 102, 'Python', 301, 124, 203),
    new Product(3, 'Alina', 103, 'JavaScript', 302, 125, 204),
    new Product(4, 'Ivan', 104, 'JavaScript', 303, 126, 205),
    new Product(5, 'Denis', 105, 'Java', 304, 127, 206),
    new Product(6, 'Kostya', 106, 'JavaScript', 305, 128, 206),
]

getProductByCreator = (productArray, creator) => {
    productArray.forEach(element => {
        if (element.creator === creator) {
            console.log(element.name)
        }
    });
}

getProductByCreatorAndCost = (productArray, creator, cost) => {
    productArray.forEach(element => {
        if (element.creator === creator && element.cost > cost) {
            console.log(element.name)
        }
    });
}

getProductByCreator(productArray, 'Java')
console.log("\n")
getProductByCreatorAndCost(productArray, 'JavaScript', 302)
console.log("\n")


class Goods {
    name;
    cost;
    type;

    constructor(name, cost, type) {
        this.name = name;
        this.cost = cost;
        this.type = type;
    }
}

class Furniture extends Goods {
    constructor(name, cost) {
        super(name, cost, 'Furniture')
    }
}

class Sofa extends Furniture {
    sitPlace;

    constructor(name, cost, sitPlace) {
      super(name, cost);
      this.sitPlace = sitPlace;
    }
}

class Bed extends Furniture {
    sleepPlace;

    constructor(name, cost, sleepPlace) {
      super(name, cost);
      this.sleepPlace = sleepPlace;
    }
}

class Locker extends Furniture {
    doorCount;

    constructor(name, cost, doorCount) {
      super(name, cost);
      this.doorCount = doorCount;
    }
}

class LockerCoupe extends Locker {
    constructor() {
        super('Шкаф-купе', 300, 2);
    }
}

class Pedestal extends Locker {
    constructor() {
        super('Тумба', 200, 3);
    }
}

class Chair extends Furniture {
    constructor() {
        super('Стул', 100, 'Chair');
    }
}

locker = new LockerCoupe()
