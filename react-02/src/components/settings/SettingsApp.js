import React, { useContext } from "react";
import { ThemeContextConsumer, Context } from "../../ThemeContextProvider";

const SettingsApp = () => {
    const context = useContext(Context);
    const onFontSizeChange = e => {
        //console.log(e.target.value);
        context.setFontSize(e.target.value);
    };
    return (
        <ThemeContextConsumer>
            {theme => (
                <div id="settings-app" style={{ fontSize: theme.fontSize }}>
                    <h2>Settings</h2>
                    <div id="settings-form-elements">
                        <label>Select Text Size</label>
                        <select
                            value={theme.onFontSizeChange}
                            onChange={onFontSizeChange}
                            name="text-size"
                        >
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
