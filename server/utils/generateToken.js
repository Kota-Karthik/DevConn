import jwt from "jsonwebtoken";
import process from "process";

export const AccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = process.env.SECRET_KEY;
    const options = {
      expiresIn: "20m",
      issuer: "DevConn",
      audience: userId.toString(),
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err.message);
        reject(new Error("Could not generate access token"));
      }
      resolve(token);
    });
  });
};

export const verifyAccessToken = (req, res, next) => {
  const token = req.cookies.AccessToken;
  if (!token) {
    return next(new Error("Access token not found"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      const message =
        err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
      return next(new Error(message));
    }
    req.payload = payload;
    next();
  });
};

export const RefreshToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {};
    const secret = process.env.REFRESH_KEY;
    const options = {
      expiresIn: "30d",
      issuer: "DevConn",
      audience: userId.toString(),
    };
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.error(err.message);
        reject(new Error("Could not generate refresh token"));
      }
      resolve(token);
    });
  });
};

export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, payload) => {
      if (err) {
        console.error(err.message);
        reject(new Error("Invalid refresh token"));
      }
      const userId = payload?.aud;
      if (!userId) {
        reject(new Error("Invalid payload in refresh token"));
      }
      resolve(userId);
    });
  });
};
