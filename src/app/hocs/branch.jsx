export const branch = (test, LeftComponent = () => () => null, RightComponent) => (Component) => (
  props
) => {
  const testResult = test(props);
  return testResult
    ? LeftComponent(Component)(props)
    : RightComponent
    ? RightComponent(Component)(props)
    : Component(props);
};
