import useStyles from "./style";

const FormRowSelect = ({ labelText, name, value, handleOnChange, list }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.formRow}>
      <label htmlFor={name} className={classes.formLabel}>
        {labelText || name}
      </label>

      <select
        name={name}
        // value={value}
        onChange={handleOnChange}
        className={classes.formSelect}
      >
        <option value='one'>one</option>
        <option value='two'>two</option>
      </select>
    </div>
  );
};

export default FormRowSelect;
