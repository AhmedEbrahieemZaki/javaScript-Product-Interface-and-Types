var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
    }
    Inventory.prototype.addProduct = function (product) {
        this.products.push(product);
    };
    Inventory.prototype.updateProduct = function (id, updatedProduct) {
        var productIndex = this.products.findIndex(function (product) { return product.id === id; });
        if (productIndex === -1) {
            return "Product with id ".concat(id, " not found.");
        }
        this.products[productIndex] = __assign(__assign({}, this.products[productIndex]), updatedProduct);
        return "Product with id ".concat(id, " updated successfully.");
    };
    Inventory.prototype.getProductById = function (id) {
        var product = this.products.find(function (product) { return product.id === id; });
        return product ? product : "Product with id ".concat(id, " not found.");
    };
    Inventory.prototype.calculateTotalValue = function () {
        return this.products.reduce(function (total, product) { return total + product.quantity * product.price; }, 0);
    };
    return Inventory;
}());
function findMax(arr) {
    if (arr.length === 0)
        return null;
    return arr.reduce(function (max, item) { return (item > max ? item : max); });
}
function fetchProductData(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var product = {
                id: id,
                name: 'Sample Product',
                quantity: 10,
                price: 99.99,
                category: 'Electronics',
            };
            resolve(product);
        }, 2000);
    });
}
function getProductData(id) {
    return __awaiter(this, void 0, void 0, function () {
        var product, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchProductData(id)];
                case 1:
                    product = _a.sent();
                    return [2 /*return*/, product];
                case 2:
                    error_1 = _a.sent();
                    return [2 /*return*/, "Error fetching product data: ".concat(error_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var inventory = new Inventory();
inventory.addProduct({ id: 1, name: 'Laptop', quantity: 5, price: 1200, category: 'Electronics' });
inventory.addProduct({ id: 2, name: 'T-Shirt', quantity: 20, price: 15, category: 'Clothing' });
inventory.addProduct({ id: 3, name: 'Apple', quantity: 100, price: 1, category: 'Food' });
console.log(inventory.updateProduct(2, { price: 18 }));
console.log(inventory.getProductById(1));
console.log(inventory.getProductById(99));
console.log("Total value of all products: $".concat(inventory.calculateTotalValue()));
console.log(findMax([5, 10, 15, 2]));
