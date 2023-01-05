"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = void 0;
const react_1 = __importStar(require("react"));
const Playground = () => {
    const [pokemon, setPokemon] = (0, react_1.useState)({
        picture: '',
        price: ''
    });
    const fetchPokemon = () => __awaiter(void 0, void 0, void 0, function* () {
        let response = yield fetch('http://localhost:3001/api/cardSet/findAll', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        });
        let data = yield response.json();
        setPokemon({
            price: data === null || data === void 0 ? void 0 : data.price,
            picture: data === null || data === void 0 ? void 0 : data.picture
        });
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'text-8xl antialiased font-bold text-amber-500 shadow-md w-fit p-2 border-2 border-slate-800 mt-20' }, "playground"),
        react_1.default.createElement("img", { src: pokemon === null || pokemon === void 0 ? void 0 : pokemon.picture }),
        react_1.default.createElement("div", null, pokemon === null || pokemon === void 0 ? void 0 : pokemon.price)));
};
exports.Playground = Playground;
//# sourceMappingURL=playground.js.map