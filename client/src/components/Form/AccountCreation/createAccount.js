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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccount = void 0;
const react_1 = __importStar(require("react"));
const Input_1 = require("../../Input");
const Flex_1 = require("../../Flex");
const Button_1 = require("../../Button");
const axios_1 = __importDefault(require("axios"));
const CreateAccount = () => {
    const [accountInfo, setAccountInfo] = (0, react_1.useState)({
        userName: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    });
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        let response = yield axios_1.default.post('http://localhost:3001/api/user/createUser', {
            accountInfo
        });
        console.log('Response From Handle Submit', response);
    });
    const handleChange = (e) => {
        setAccountInfo(Object.assign(Object.assign({}, accountInfo), { [e.target.name]: e.target.value }));
    };
    return (react_1.default.createElement("form", { onSubmit: (e) => handleSubmit(e) },
        react_1.default.createElement("div", null, "Create An Account!"),
        react_1.default.createElement(Flex_1.Flex, { flexDirection: 'flex-col' },
            react_1.default.createElement(Input_1.Input, { name: 'userName', onChange: handleChange }),
            react_1.default.createElement(Input_1.Input, { name: 'password', onChange: handleChange }),
            react_1.default.createElement(Input_1.Input, { name: 'email', onChange: handleChange }),
            react_1.default.createElement(Button_1.Button, { onClick: handleSubmit }, "Submit"))));
};
exports.CreateAccount = CreateAccount;
//# sourceMappingURL=createAccount.js.map