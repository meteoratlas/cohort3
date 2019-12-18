import React, { useContext } from "react";
import { ThemeContextConsumer, Context } from "../../ThemeContextProvider";

const SettingsApp = () => {
    const sizes = { "0.75rem": "small", "1rem": "normal", "1.25rem": "large" };
    const context = useContext(Context);
    const onFontSizeChange = e => {
        context.setFontSize(e.target.value);
    };
    return (
        <ThemeContextConsumer>
            {theme => (
                <div
                    id="settings-app"
                    style={{
                        fontSize: theme.fontSize,
                        color: theme.currentTheme.fg,
                        backgroundColor: theme.currentTheme
                    }}
                >
                    <h2>Settings</h2>
                    <div id="settings-form-elements">
                        <label>Select Text Size</label>
                        <select
                            value={sizes[theme.fontSize]}
                            onChange={onFontSizeChange}
                            name="text-size"
                        >
                            <option value="small">Small</option>
                            <option value="normal">Normal</option>
                            <option value="large">Large</option>
                        </select>
                        <br />
                        <label>Use Dark Theme?</label>
                        <input
                            type="checkbox"
                            checked={theme.useDarkTheme}
                            onChange={theme.setTheme}
                        ></input>
                    </div>
                </div>
            )}
        </ThemeContextConsumer>
    );
};

export default SettingsApp;
