module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: env.int('UPLOAD_SIZE_LIMIT', 50 * 1024 * 1024),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      security: {
        file: {
          maxSize: env.int('UPLOAD_MAX_FILE_SIZE', 50 * 1024 * 1024),
          allowedTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'image/svg+xml',
          ],
        },
      },
    },
  },
});
