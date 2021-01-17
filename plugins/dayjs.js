import localizedFormat from "dayjs/plugin/localizedFormat";

export default ({ app: { $dayjs } }) => {
  $dayjs.extend(localizedFormat);
};
