export const jwtConstants = {
    secret: process.env.JWT_SECRET || 'defaultSecret'
};

if (process.env.NODE_ENV === 'production') {
    if (!process.env.JWT_SECRET || jwtConstants.secret === 'defaultSecret') {
        throw new Error(
            'Critical ERROR: JWT_SECRET is not defined. Please set the JWT_SECRET environment variable production.'
        );
    }
}