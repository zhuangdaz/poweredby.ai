import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/ExampleStack.ts
import { NextjsSite } from "sst/constructs";
function ExampleStack({ stack }) {
  const site = new NextjsSite(stack, "Site", {
    path: "frontend/"
  });
  stack.addOutputs({
    URL: site.url || "localhost"
  });
}
__name(ExampleStack, "ExampleStack");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "poweredbyai",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(ExampleStack);
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3RhY2tzL0V4YW1wbGVTdGFjay50cyIsICJzc3QuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBOZXh0anNTaXRlLCBTdGFja0NvbnRleHQgfSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEV4YW1wbGVTdGFjayh7IHN0YWNrIH06IFN0YWNrQ29udGV4dCkge1xuICAvLyBjb25zdCB0YWJsZSA9IG5ldyBUYWJsZShzdGFjaywgXCJQcm9kdWN0c1wiLCB7XG4gIC8vICAgZmllbGRzOiB7XG4gIC8vICAgICBjb3VudGVyOiBcInN0cmluZ1wiLFxuICAvLyAgIH0sXG4gIC8vICAgcHJpbWFyeUluZGV4OiB7IHBhcnRpdGlvbktleTogXCJjb3VudGVyXCIgfSxcbiAgLy8gfSk7XG5cbiAgY29uc3Qgc2l0ZSA9IG5ldyBOZXh0anNTaXRlKHN0YWNrLCBcIlNpdGVcIiwge1xuICAgIHBhdGg6IFwiZnJvbnRlbmQvXCIsXG4gIH0pO1xuXG4gIC8vIEFkZCB0aGUgc2l0ZSdzIFVSTCB0byBzdGFjayBvdXRwdXRcbiAgc3RhY2suYWRkT3V0cHV0cyh7XG4gICAgVVJMOiBzaXRlLnVybCB8fCBcImxvY2FsaG9zdFwiLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgeyBTU1RDb25maWcgfSBmcm9tIFwic3N0XCI7XG5pbXBvcnQgeyBFeGFtcGxlU3RhY2sgfSBmcm9tIFwiLi9zdGFja3MvRXhhbXBsZVN0YWNrXCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWcoX2lucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFwicG93ZXJlZGJ5YWlcIixcbiAgICAgIHJlZ2lvbjogXCJ1cy1lYXN0LTFcIixcbiAgICB9O1xuICB9LFxuICBzdGFja3MoYXBwKSB7XG4gICAgYXBwLnN0YWNrKEV4YW1wbGVTdGFjaylcbiAgfSxcbn0gc2F0aXNmaWVzIFNTVENvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7O0FBQUEsU0FBUyxrQkFBZ0M7QUFFbEMsU0FBUyxhQUFhLEVBQUUsTUFBTSxHQUFpQjtBQVFwRCxRQUFNLE9BQU8sSUFBSSxXQUFXLE9BQU8sUUFBUTtBQUFBLElBQ3pDLE1BQU07QUFBQSxFQUNSLENBQUM7QUFHRCxRQUFNLFdBQVc7QUFBQSxJQUNmLEtBQUssS0FBSyxPQUFPO0FBQUEsRUFDbkIsQ0FBQztBQUNIO0FBaEJnQjs7O0FDQ2hCLElBQU8scUJBQVE7QUFBQSxFQUNiLE9BQU8sUUFBUTtBQUNiLFdBQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTyxLQUFLO0FBQ1YsUUFBSSxNQUFNLFlBQVk7QUFBQSxFQUN4QjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
