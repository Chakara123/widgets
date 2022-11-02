module.exports = {
  entry: './src/apps/emoji-cards/index.tsx',
  shortcode: 'emoji-cards',
  title: 'Emoji Cards',
  status: 'stable',
  description: 'Incredible emoji trading cards',
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  settingsSchema: {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        properties: {
          emoji: {
            type: 'string',
            title: 'Emoji code',
            description: 'The name of the emoji to display.',
            examples: ['the_horns', 'pinching_hand'],
          },
        },
      },
    },
  },
  additionalCustomProperties: {
    availableTranslations: [
      'ar',
      'de',
      'en',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt',
      'ru',
      'tr',
      'zh',
    ],
  },
};
