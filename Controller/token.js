export const sendToken = (user, statuscode, res, message) => {
    const token = user.getJWTToken();

    if (!token) {
        console.error("Token generation failed.");
        return res.status(500).json({ success: false, message: "Token generation failed." });
    }

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statuscode).cookie("token", token, options).json({
        success: true,
        user,
        message,
        token,
    });
}