import { Amplify } from 'aws-amplify';

const config = {
  Auth: {
    mandatorySignIn: true,
    region: 'your-region',
    identityPoolId: 'your-identity-pool-id',
    userPoolId: 'your-user-pool-id',
    userPoolWebClientId: 'your-web-client-id',
  },
};

Amplify.configure(config);

export default config;