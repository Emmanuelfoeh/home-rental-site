import useStyles from "./style";

const FormInput = ({ type, name, value, handleOnchange, labelText }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.formRow}>
      <label htmlFor={name} className={classes.formLabel}>
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleOnchange}
        className={classes.formInput}
      />
    </div>
  );
};

export default FormInput;
