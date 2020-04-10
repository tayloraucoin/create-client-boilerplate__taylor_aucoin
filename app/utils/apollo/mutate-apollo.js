import apollo from "../../apollo-client";

export default async function mutateApollo(mutation, variables) {
  return await apollo.mutate({ mutation, variables, errorPolicy: "all" });
}
