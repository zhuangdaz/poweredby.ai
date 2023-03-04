import { NextjsSite, StackContext } from "sst/constructs";

export function ExampleStack({ stack }: StackContext) {
  // const table = new Table(stack, "Products", {
  //   fields: {
  //     counter: "string",
  //   },
  //   primaryIndex: { partitionKey: "counter" },
  // });

  const site = new NextjsSite(stack, "Site", {
    path: "frontend/",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url || "localhost",
  });
}
