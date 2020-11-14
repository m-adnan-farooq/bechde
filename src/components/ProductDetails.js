import React from "react";
import NumberFormat from "react-number-format";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      width: "15vw",
      height: "60vh",
      
    },
  })
);

export const ProductDetails = (val) => {
  const classes = useStyles();
  return (
    <div>
      <div id="main-display">
        <div id="product-detail">
          <div >
            <Paper elevation={3} className={classes.root} variant="outlined">
              <Typography variant="h5">
                <div className="paper-lines">
                <NumberFormat
                  value={val.val.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs. "}
                />
                </div>
                <div className="paper-lines">{val.val.productDetail}</div>
              </Typography>
            </Paper>
          </div>
          <img
            id="product-image"
            src={val.val.imgsrc}
            alt={val.val.imgsrc}
          />
          <div >
            <Paper elevation={3} className={classes.root} variant="outlined">
              <Typography variant="h5">
              <div className="paper-lines">
                
                  Seller: {val.val.sellerName}
                  
                </div>
                <div className="paper-lines">Location: {val.val.location}</div>
              </Typography>
            </Paper>
          </div>
        </div>
        <Typography variant="h1">
          <div>{val.val.name}</div>
        </Typography>
      </div>
    </div>
  );
};
