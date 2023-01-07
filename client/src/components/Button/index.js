"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var Button = function (_a) {
    var children = _a.children, onClick = _a.onClick, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'bg-orange-500' : _b;
    return (react_1.default.createElement("button", { className: "w-fit ".concat(backgroundColor, " text-indigo-100 border border-solid border-slate-600 p-2 rounded-lg font-bold hover:text-zinc-50  transition ease-in-out delay-5000 duration-300 hover:bg-purple-500"), onClick: onClick }, children));
};
exports.Button = Button;
//# sourceMappingURL=index.js.map