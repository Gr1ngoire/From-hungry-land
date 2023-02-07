import {config} from 'dotenv';


config();

const {
    PORT,
    PRIVATE_KEY,
    TOKEN_EXPIRY_PERIOD,
} = process.env;

const ENV = {
    APP: {
        SERVER_PORT: Number(PORT),
    },
    JWT: {
        JWT_PRIVATE_KEY: PRIVATE_KEY,
        JWT_TOKEN_EXPIRY_PERIOD: TOKEN_EXPIRY_PERIOD,
    },
}

export { ENV };