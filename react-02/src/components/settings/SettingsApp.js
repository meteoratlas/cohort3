import React from "react";
import { ThemeContextConsumer } from "../../ThemeContextProvider";

const SettingsApp = () => {
    const onFontSizeChange = () => {};
    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="settings-app" style={{ fontSize: theme.fontSize }}>
                    <h2>Settings</h2>
                    <div id="settings-form-elements">
                        <label>Select Text Size</label>
                        <select name="text-size">
                            <option value="small">Small</option>
                            <option value="normal">Normal</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>
            )}
        </ThemeContextConsumer>
    );
};

export default SettingsApp;
