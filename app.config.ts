import type { ExpoConfig } from 'expo/config';

const LOGO_URL =
  'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/android.svg';

const config: ExpoConfig = {
  name: 'Android Master Boost',
  slug: 'android-master-boost-v2026-79',
  version: '2026.79.0',
  orientation: 'portrait',
  icon: LOGO_URL,
  userInterfaceStyle: 'dark',
  splash: {
    image: LOGO_URL,
    resizeMode: 'contain',
    backgroundColor: '#071A33',
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: false,
    bundleIdentifier: 'com.androidmasterboost.mobile',
  },
  android: {
    package: 'com.androidmasterboost.mobile',
    adaptiveIcon: {
      foregroundImage: LOGO_URL,
      backgroundColor: '#071A33',
    },
  },
  extra: {
    branding: {
      logoUrl: LOGO_URL,
      logoAsset: './assets/branding/android-master-boost-logo.svg',
    },
  },
};

export default config;
