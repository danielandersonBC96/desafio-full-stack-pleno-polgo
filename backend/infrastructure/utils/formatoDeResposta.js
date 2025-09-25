
export function FormatoDaResposta({ data = null, pagination = null, message = "" }) {
  const response = { success: true, message };
  if (data !== null) response.data = data;
  if (pagination) response.pagination = pagination;
  return response;
}
