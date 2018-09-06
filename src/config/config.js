import { Map } from 'immutable'

// the site basename
const API_BASE = process.env.API_BASE || "/"
const URL = process.env.NODE_ENV === 'production' ? `http://localhost:8080${API_BASE}` : 'http://localhost:8090/'

const defineExternalApiURL = () => {
  const env = process.env.NODE_ENV;
  const envBaseUrl = process.env.API_BASE_URL_EXTERNAL;
  switch(env) {
    case 'production':
      return envBaseUrl || 'http://url:porta/';
    case 'development':
      return envBaseUrl || `http://localhost:${process.env.PORT || 8090}/`;
    case 'staging':
      return envBaseUrl || `http://localhost:${process.env.PORT || 8090}/`;
    case 'testing':
    case 'test':
      return `http://localhost:${process.env.PORT || 8090}/`;
    default:

  }
}

const API_BASE_URL_INTERNAL = process.env.API_BASE_URL_INTERNAL || URL
const API_BASE_URL_EXTERNAL = defineExternalApiURL();
const baseConfig = {
  all: {
    'API_BASE_URL_EXTERNAL': API_BASE_URL_EXTERNAL,
    'API_BASE_URL_INTERNAL': API_BASE_URL_INTERNAL,
    'API_BASE': API_BASE,
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    HOST: process.env.HOST || 'localhost',
    PORT: 8090, //dev port
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: '',
    apiName: '/api',
    publicPath: `${API_BASE}assets`
  },
  test: {
  },
  development: {
  },
  staging: {
  },
  production: {
    HOST: process.env.HOST || 'localhost',
    PORT: 8090,
    apiUrl: '',
  }
};

export default Map().merge(baseConfig.all, baseConfig[baseConfig.all.env]);
