module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json'
        }
    },
    moduleNameMapper: {
        '\\.(svg|png|jpg|jpeg|gif|webp|avif|ico)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^next/image$': '<rootDir>/__mocks__/nextImageMock.js'
    }
};
