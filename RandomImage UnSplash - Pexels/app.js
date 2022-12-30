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
var _this = this;
var container = document.querySelector('.container');
var form = document.querySelector('form');
var row = 30;
var cols = 4;
var apiKey = "563492ad6f91700001000001479e896764a14390a1d66173789721d9";
function randomNumber() {
    return Math.floor(Math.random() * 500);
}
function showImages() {
    container === null || container === void 0 ? void 0 : container.innerHTML = "";
    for (var i = 0; i < row * cols; i++) {
        var url = "https://source.unsplash.com/random/".concat(randomNumber());
        var imageEl = document.createElement('img');
        imageEl.src = url;
        container === null || container === void 0 ? void 0 : container.appendChild(imageEl);
    }
}
function clearPage() {
    container === null || container === void 0 ? void 0 : container.innerHTML = "";
}
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var search, url, res, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                e.preventDefault();
                container === null || container === void 0 ? void 0 : container.innerHTML = "";
                search = (_a = document.querySelector('#search')) === null || _a === void 0 ? void 0 : _a.value;
                if (search == "") {
                    alert("Please enter your data!!!");
                    return [2 /*return*/];
                }
                url = "https://api.pexels.com/v1/search?query=".concat(search, "&page=1");
                return [4 /*yield*/, fetch(url, {
                        method: "GET",
                        headers: {
                            Accept: "application/json",
                            Authorization: apiKey
                        }
                    })];
            case 1:
                res = _b.sent();
                return [4 /*yield*/, res.json()];
            case 2:
                data = _b.sent();
                console.log(data);
                data.photos.forEach(function (image) {
                    var item_container = document.createElement('div');
                    var img = document.createElement('img');
                    var desc = document.createElement('p');
                    var photographer = document.createElement('small');
                    img.src = image.src.large;
                    desc.innerHTML = image.alt;
                    photographer.innerHTML = image.photographer;
                    item_container === null || item_container === void 0 ? void 0 : item_container.setAttribute('class', 'item-container');
                    item_container === null || item_container === void 0 ? void 0 : item_container.appendChild(img);
                    item_container === null || item_container === void 0 ? void 0 : item_container.appendChild(desc);
                    item_container === null || item_container === void 0 ? void 0 : item_container.appendChild(photographer);
                    container === null || container === void 0 ? void 0 : container.appendChild(item_container);
                });
                return [2 /*return*/];
        }
    });
}); });
