"use strict";
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
exports.AuthRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const router = express_1.default.Router();
exports.AuthRouter = router;
const checkForUniqueEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((yield (yield UserModel_1.default.find({ email: email })).length) > 0) {
            return {
                error: `${email} is already in use.`
            };
        }
        else {
            return {
                response: email
            };
        }
    }
    catch (err) {
        return {
            error: err.message
        };
    }
});
const buildUserDataObject = (request) => __awaiter(void 0, void 0, void 0, function* () {
    const { response, error } = yield checkForUniqueEmail(request.email);
    return response ? {
        firstName: request.firstName,
        lastName: request.lastName,
        email: response,
        birthDate: request.birthDate
    } : { error: error };
});
router.get('/', (req, res) => {
    console.log('hi');
    res.json({ hi: 'hi' });
});
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataObject = yield buildUserDataObject(req.body);
    if (!dataObject.error) {
        const newUserObject = new UserModel_1.default(dataObject);
        newUserObject.save();
        res.status(200).json(newUserObject);
    }
    else {
        console.log(dataObject.error);
        res.status(401).json(dataObject);
    }
}));
