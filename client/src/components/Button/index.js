"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
const Button = ({ children, onClick, backgroundColor = 'bg-orange-500' }) => {
    return (react_1.default.createElement("button", { className: `w-fit ${backgroundColor} text-indigo-100 border border-solid border-slate-600 p-2 rounded-lg font-bold hover:text-zinc-50  transition ease-in-out delay-5000 duration-300 hover:bg-purple-500`, onClick: onClick }, children));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map