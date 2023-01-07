"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Flex = function (_a) {
    var children = _a.children, _b = _a.flexDirection, flexDirection = _b === void 0 ? 'row' : _b;
    return (react_1.default.createElement("div", { className: "flex ".concat(flexDirection) }, children));
};
exports.default = Flex;
//# sourceMappingURL=index.js.map