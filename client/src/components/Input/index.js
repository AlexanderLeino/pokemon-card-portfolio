"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input = function (_a) {
    var onChange = _a.onChange, name = _a.name;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", { name: name, className: "max-w-fit focus-visible: border-solid border-2 border-slate-500 hover:border-orange-500 p-1 mt-4 outline-none focus-visible:outline-none focus-visible:border-orange-500 ", onChange: onChange })));
};
exports.default = Input;
//# sourceMappingURL=index.js.map