import React, { useState, useEffect } from "react";
import "../../css/signup.css";

const SignUpPage = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        document.title = "Sign Up for Sleep Buddies";
    }, []);

    return (
        <div className="signup-page">
            <h1>Sign Up</h1>
            {/* Username*/}
            <form className="signup-form">
                <div className="input-group">
                    <label>Username:</label>
                    <input type="text" placeholder="Enter your username" className="input-field" />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" className="input-field" />
                </div>
                <div className="input-group">
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm your password" className="input-field" />
                </div>

                {/* Scrollable Terms and Services */}
                <div className="terms-container">
                    <label>Terms and Services:</label>
                    <textarea 
                        className="terms-textbox" 
                        readOnly 
                        value={"By using this app, you agree to the following terms of service. " +
                            "Our app collects data on your sleep hours for the week to analyze and provide personalized insights, " +
                            "such as your average sleep duration, the least amount of sleep recorded for a day, and a graphical representation of your sleep patterns. " +
                            "Additionally, the app offers goal-setting features based on this data. The data you provide is stored indefinitely " +
                            "and used exclusively for delivering these analytics. Only authorized developers have access to this data, and it is not shared " +
                            "with any third-party services or entities. We prioritize your data security with industry-standard practices, but you retain full ownership " +
                            "of the data you input. This app is designed for informational purposes only and does not provide medical advice. " +
                            "While we strive for accuracy and consistent availability, we cannot guarantee uninterrupted service or completely accurate analytics. " +
                            "The insights generated depend on the accuracy of the data you provide. Please consult a healthcare professional for any sleep or health concerns. " +
                            "We are not liable for any consequences arising from incorrect or incomplete data input. We may update these terms periodically to reflect changes " +
                            "in our policies or services. If significant changes occur, we will notify you via email or in-app notifications. " +
                            "Continued use of the app after such updates constitutes your acceptance of the revised terms. If you have questions or concerns, please contact " +
                            "us at support@sleepbuddies.com."}
                    />
                </div>

                {/* Checkbox for accepting terms */}
                <div className="checkbox-container">
                    <input 
                        type="checkbox" 
                        id="terms-checkbox" 
                        checked={isChecked} 
                        onChange={handleCheckboxChange} 
                    />
                    <label htmlFor="terms-checkbox">
                        I agree to the Terms and Services
                    </label>
                </div>

                <button type="submit" className="login-button" disabled={!isChecked}>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;
