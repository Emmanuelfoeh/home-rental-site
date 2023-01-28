import React, { useCallback } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import useStyles from "./style";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import FormInput from "../Form/FormInput";
import FormRowSelect from "../Form/FormRowSelect";
import StyledDropzone from "./Dropzone";

const NewProperty = ({ value }) => {
  const { classes } = useStyles();
  const { palette } = useTheme();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.newPropertyContainer}>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // bgcolor:"brown", sx={{ minWidth: 679 }}
          margin: "0 auto",
        }}
      >
        <h3 className={classes.propertyHeader}>
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </h3>

        <Box>
          <Card className={classes.card} variant="outlined">
            <h3 className={classes.formHeader}>Add new Property</h3>
            <form className={classes.form}>
              <div className={classes.inputWrap}>
                <FormInput type="text" labelText="Name" />
                <FormInput type="text" labelText="Name" />
                <FormInput type="text" labelText="Name" />
                <FormRowSelect labelText="Select Property" />
                <FormRowSelect labelText="Select Property" />
                <FormRowSelect labelText="Select Property" />
                <FormInput type="text" labelText="Name" />
                <FormRowSelect labelText="Select Property" />
              </div>
              <div className={classes.formRow}>
                <label className={classes.formLabel} htmlFor="textArea">
                  Description
                </label>
                <textarea
                  id="textArea"
                  defaultValue={`type here`}
                  className={classes.textAreaField}
                ></textarea>
              </div>
              <StyledDropzone />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button variant="contained" className={classes.viewBtn}>
                  Add New Property
                </Button>
              </div>
            </form>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default NewProperty;
