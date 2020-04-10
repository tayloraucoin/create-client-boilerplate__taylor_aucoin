import apollo from "../../apollo-client";

export default async function queryApollo(query, variables, signal) {
  const params = {
    query,
    errorPolicy: "all"
  };

  if (variables) {
    params.variables = variables;
  }

  if (signal) {
    params.context = {};
    params.context.fetchOptions = {};
    params.context.fetchOptions.signal = signal;
  }

  return await apollo.query(params);
}
