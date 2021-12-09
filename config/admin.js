module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '83e303b3aa9b2b864ca83878590a6187'),
  },
});
