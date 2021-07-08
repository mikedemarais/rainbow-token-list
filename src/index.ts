#!/usr/bin/env node

/**
 * Disable certificate validation.
 *
 * @see https://nodejs.org/api/cli.html#cli_node_tls_reject_unauthorized_value
 */
/**
 * Library imports and exports.
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export * from './load';
