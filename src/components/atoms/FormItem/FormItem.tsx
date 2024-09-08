import "./formItem.less";

type FormItemProps = {
  label: string;
  value?: string;
  id: string;
};

/**
 * Form Item for displaying information(not editable)
 * @param {string} label - value for label
 * @param {string} value - value for input
 * @param {string} id - id of the input
 * @returns {JSX.Element}
 */
const FormItem = ({ label, value, id }: FormItemProps) => (
  <div className="form-item">
    <label className="form-item__label" htmlFor={id}>
      {label}:
    </label>
    <input
      className="form-item__value"
      type="text"
      id={id}
      value={value}
      disabled
    />
  </div>
);

export default FormItem;
