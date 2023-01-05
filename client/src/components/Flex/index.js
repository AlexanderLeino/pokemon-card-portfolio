"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flex = void 0;
const react_1 = __importDefault(require("react"));
const Flex = ({ children, flexDirection }) => {
    return (react_1.default.createElement("div", { className: `flex ${flexDirection}` }, children));
};
exports.Flex = Flex;
//# sourceMappingURL=index.js.map