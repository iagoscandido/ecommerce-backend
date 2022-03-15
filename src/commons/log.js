const getDate = () => new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' });
const formatted = (functionName) => `### ${functionName} ${getDate()} ###`;

export default {
  debug: async (...payload) => {
    console.log(formatted('DEBUG'));
    console.log(payload);
  },
  info: async (...payload) => {
    console.log(formatted('INFO'));
    console.log(payload);
  },
  error: async (...payload) => {
    const container = payload.reduce((acc, curr) => acc.concat(typeof curr === 'object' && curr ? JSON.stringify(curr, Object.getOwnPropertyNames(curr)) : curr), []);
    console.log(container);
  },
};
