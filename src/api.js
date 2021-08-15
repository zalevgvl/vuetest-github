import axios from 'axios';
import getTestPayments from './mocks/getPayments';

/**
 * @var {Axios}
 */
const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

/**
 * Load payments data.
 *
 * @param {Object} params
 * @returns {Promise}
 */
const getPayments = !process.env.VUE_APP_TEST_MODE ? (params = {}) => instance.request({
  method: 'get',
  url: '/api/v1/payments',
  params,
}) : getTestPayments;

export default {
  instance,
  getPayments,
};
