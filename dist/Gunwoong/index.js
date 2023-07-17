var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./styled";
import { GlobalStyle } from "./styled";
var Darkmode = function () {
    var _a = useState(false), checked = _a[0], setChecked = _a[1];
    useEffect(function () {
        var storedMode = localStorage.getItem("darkMode");
        if (storedMode) {
            setChecked(storedMode === "true");
        }
    }, []);
    useEffect(function () {
        localStorage.setItem("darkMode", checked.toString());
        if (checked) {
            document.body.classList.add("dark-mode");
        }
        else {
            document.body.classList.remove("dark-mode");
        }
    }, [checked]);
    var handleChange = function (e) {
        return setChecked(e.target.checked);
    };
    var theme = {
        mode: checked ? "dark" : "light",
    };
    return (_jsxs(ThemeProvider, __assign({ theme: theme }, { children: [_jsx(GlobalStyle, {}), _jsxs(Styled.Label, { children: [_jsxs("span", { children: ["Darkmode is ", checked ? "on" : "off"] }), _jsx(Styled.Input, { checked: checked, type: "checkbox", onChange: handleChange }), _jsx(Styled.Switch, {})] })] })));
};
export default Darkmode;
