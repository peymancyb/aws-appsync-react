"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
var React = require("react");
var react_native_1 = require("react-native");
var netinfo_1 = require("@react-native-community/netinfo");
var PropTypes = require("prop-types");
var aws_appsync_1 = require("aws-appsync");
var Rehydrate = function (props) { return (React.createElement(react_native_1.View, { style: [styles.container, props.style || {}] }, props.rehydrated ? props.children : React.createElement(react_native_1.Text, null, "Loading..."))); };
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
});
var Rehydrated = /** @class */ (function (_super) {
    __extends(Rehydrated, _super);
    function Rehydrated(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            rehydrated: false
        };
        return _this;
    }
    Rehydrated.prototype.componentWillMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.client.hydrated()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, netinfo_1.default.isConnected.fetch()];
                    case 2:
                        _a.sent();
                        this.setState({
                            rehydrated: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Rehydrated.prototype.render = function () {
        var _a = this.props, render = _a.render, children = _a.children, loading = _a.loading, style = _a.style;
        var rehydrated = this.state.rehydrated;
        if (render)
            return render({ rehydrated: rehydrated });
        if (children) {
            if (loading)
                return rehydrated ? children : loading;
            return (React.createElement(Rehydrate, { rehydrated: rehydrated, style: style }, children));
        }
    };
    Rehydrated.contextTypes = {
        client: PropTypes.instanceOf(aws_appsync_1.default).isRequired,
    };
    Rehydrated.propTypes = {
        render: PropTypes.func,
        children: PropTypes.node,
        loading: PropTypes.node,
        style: react_native_1.ViewPropTypes ? react_native_1.ViewPropTypes.style : react_native_1.View.propTypes.style,
    };
    return Rehydrated;
}(React.Component));
exports.default = Rehydrated;
