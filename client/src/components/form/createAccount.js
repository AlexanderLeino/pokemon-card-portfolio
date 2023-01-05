"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
const react_1 = __importDefault(require("react"));
const Input_1 = require("../Input");
const CreateAccount = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (react_1.default.createElement("form", { onSubmit: (e) => handleSubmit(e) },
        react_1.default.createElement("div", null, "Create An Account!"),
        react_1.default.createElement(Input_1.Input, { onChange: handleChange })));
};
exports.CreateAccount = CreateAccount;
//# sourceMappingURL=createAccount.js.map