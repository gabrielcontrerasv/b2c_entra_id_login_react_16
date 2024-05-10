import { PublicClientApplication, LogLevel } from '@azure/msal-browser';

const REACT_TENANT_ID="inteiasndbx.onmicrosoft.com"
const REACT_CLIENT_ID="852f995e-4fe0-4cca-a006-a9f2c9dcaabb"

const msalConfig = {
  auth: {
    clientId: REACT_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${REACT_TENANT_ID}/B2C_1_login_appimotion`,
    knownAuthorities: ['https://inteiasndbx.b2clogin.com/inteiasndbx.onmicrosoft.com'],
    redirectUri: '/',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      }
    }
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
msalInstance.initialize()

export const loginRequest = {
  scopes: ["openid", "profile"], // Puedes agregar más scopes si es necesario
};
