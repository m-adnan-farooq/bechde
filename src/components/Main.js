import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { FormControl, NativeSelect } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import NumberFormat from "react-number-format";
import { ProductDetails } from "./ProductDetails";
import Ad from "./Ad";
import { data } from "../data/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  dropDown: {
    color: "grey",
  },
  appBar: {
    backgroundColor: "rgba(153,204,255,0.5)",
    height: "60px",
    color: "darkslateblue",
  },
  homeItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    backgroundColor: 'darkslateblue'
  },
}));

const cardStyles = makeStyles({
  root: {
    width: "17.5%",
    margin: "30px",
    backgroundColor: "rgba(255,255,255,0.6)"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
var valueItems = {};
export default function Main() {
  const classes = useStyles();
  const cardClasses = cardStyles();
  const [display, setDisplay] = React.useState(0);

  var showDetails = (val) => {
    console.log(val);
    valueItems = val;
    setDisplay(1);
  };
  return (
    <div>
      <div className="top-bar">
        <img id="logo" src={require("./logo.png")} alt="Bech de" />
        <Typography variant='h6' style={{color: 'lightblue'}}> Sell anything and everything...!!</Typography>
        <div id="search-div">
          <input id="search-input" placeholder="Enter item to search"></input>
          <button id="search-button">Submit</button>
        </div>
      </div>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <FormControl>
                <NativeSelect
                  defaultValue="All Categories"
                  className={classes.dropDown}
                  id="categories-native-select"
                >
                  <option className="categories" value="All Categories">
                    All Categories
                  </option>
                  <option className="categories" value="Cars">
                    Cars
                  </option>
                  <option className="categories" value="Mobiles">
                    Mobiles
                  </option>
                  <option className="categories" value="Computers">
                    Computers
                  </option>
                </NativeSelect>
              </FormControl>
            </Typography>
            <Button
              color="inherit"
              onClick={() => setDisplay(0)}
              className="all-buttons"
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => setDisplay(2)}
              className="all-buttons"
            >
              Post Your Ad
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      {display === 0 ? (
        <div className={classes.homeItems}>
          {data.map((value, index) => {
            return (
              <Card className={cardClasses.root} key={index}>
                <CardContent>
                  <img
                    src={value.imgsrc}
                    alt={value.imgsrc}
                    width="200px"
                    height="150px"
                  />
                  <Typography variant="h5">
                    <NumberFormat
                      value={value.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"Rs. "}
                    />{" "}
                  </Typography>
                  <Typography>{value.name}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => {
                      showDetails(value);
                    }}
                    className="all-buttons"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      ) : display === 1 ? (
        <div>
          <ProductDetails val={valueItems} />
        </div>
      ) : (
        <div>
          <Ad />
        </div>
      )}
    </div>
  );
}
