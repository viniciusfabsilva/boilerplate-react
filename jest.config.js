module.exports = {
    TestEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/app/**', // should be tested in e2e
        '!src/lib/registry.tsx',
        '!src/types/**',
        '!src/**/stories.tsx',
        '!src/styles/**'
    ],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': [
            'babel-jest',
            {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            targets: {
                                node: 'current',
                            },
                        },
                    ],
                    '@babel/preset-react',
                    '@babel/preset-typescript',
                ],
                plugins: ['dynamic-import-node'],
            },
        ],
    },
    moduleNameMapper: {
        'ˆstyled-components':
            'styled-components/dist/styled-components.browser.cjs.js'
    }
}