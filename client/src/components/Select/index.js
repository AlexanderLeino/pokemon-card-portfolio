"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(require("react"));
const Select = ({ cardSets }) => {
    return (react_1.default.createElement("select", null, cardSets === null || cardSets === void 0 ? void 0 : cardSets.map((cardSet) => {
        return react_1.default.createElement("option", null, cardSet === null || cardSet === void 0 ? void 0 : cardSet.name);
    })));
};
exports.Select = Select;
//# sourceMappingURL=index.js.map