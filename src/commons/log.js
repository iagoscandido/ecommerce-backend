const getDate = () => new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
const formatted = (functionName) => `### ${functionName} ${getDate()} ###`;

export default {
  debug: async (...payload) => {
    console.log(formatted('DEBUG'));
    console.log(payload);
  },
};
