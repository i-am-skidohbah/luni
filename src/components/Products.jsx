import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import TextField from "@mui/material/TextField";

import EditIcon from "@mui/icons-material/Edit";
import DeletIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Color } from "../styles/theme";

import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Message } from "@mui/icons-material";
const Products = () => {
  // mock data
  const products = [
    {
      _id: -1,
      Name: "Product",
      Qty: "440",
      Description: "a solor bulb",
      price: "$700",
      color: "white",
    },
  ];

  const [initialValues, setInitialValues] = useState({
    id: "",
    Name: "",
    Qty: "",
    Description: "",
    price: "",
    color: " ",
  });

  const ValidationSchema = Yup.object().shape({
    Name: Yup.string().required("Name is required"),
    price: Yup.number()
      .required("price is required")
      .positive("price must be more than 5"),
    Qty: Yup.number().required("quantity is required"),
    Description: Yup.string().required("description is required"),
  });

  const handleSubmit = (values) => {
    values._id = Math.random() * 1000;
    products.push(values);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);
  const handleAddProduct = () => {
    setInitialValues({
      id: "",
      Name: "",
      Qty: "",
      Description: "",
      price: "",
      color: " ",
    });
    setOpen(true);
  };

  const handleEditProduct = (Product) => {
    setOpen(true);
    setInitialValues(Product);
    console.log("delect", Product);
  };

  const handleDeleteProduct = (Product) => {
    console.log("delect", Product);
  };

  return (
    <>
      <Typography sx={{ mb: 1 }} variant="h4">
        Products
      </Typography>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={handleAddProduct}
      >
        Add Product
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>color</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((e, i) => {
              return (
                <TableRow key={e.id}>
                  <TableCell>{e.Name}</TableCell>
                  <TableCell>{e.Qty}</TableCell>
                  <TableCell>{e.Description}</TableCell>
                  <TableCell>{e.price}</TableCell>
                  <TableCell>{e.color}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditProduct(e)}>
                      <EditIcon />
                    </IconButton>

                    <IconButton onClick={() => handleDeleteProduct(e)}>
                      <DeletIcon sx={{ color: Color.danger }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle>{"Add product"}</DialogTitle>

        <Formik
          initialValues={initialValues}
          ValidationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, invalid, getFieldProps }) => {
            return (
              <Form>
                <DialogContent>
                  <Grid container spacing={2}>
                    <Grid size={12}>
                      <Field
                        as={TextField}
                        name="products"
                        label="products"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="product is required">
                        {(message) => {
                          <Typography color={`red`}>{message}</Typography>;
                        }}
                      </ErrorMessage>
                    </Grid>
                    <Grid size={12}>
                      <Field
                        as={TextField}
                        name="quantity"
                        label="quantity"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="quantity is required">
                        {(message) => {
                          <Typography color={`red`}>{message}</Typography>;
                        }}
                      </ErrorMessage>
                    </Grid>
                    <Grid size={12}>
                      <Field
                        as={TextField}
                        name="description"
                        label="description"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="description is required">
                        {(message) => {
                          <Typography color={`red`}>{message}</Typography>;
                        }}
                      </ErrorMessage>
                    </Grid>

                    <Grid size={12}>
                      <Field
                        as={TextField}
                        name="price"
                        label="price"
                        required
                        fullWidth
                      />
                      <ErrorMessage name="price is required">
                        {(message) => {
                          return (
                            <Typography color={`red`}>{message}</Typography>
                          );
                        }}
                      </ErrorMessage>
                    </Grid>
                  </Grid>
                </DialogContent>

                <DialogActions>
                  {getFieldProps("_id").value !== -1 ? (
                    <Button
                      disabled={!dirty || invalid}
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={() => handleSubmit}
                    >
                      save
                    </Button>
                  ) : (
                    <Button
                      disabled={!dirty || invalid}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Editt
                    </Button>
                  )}
                  <Button autoFocus onClick={() => setOpen(false)}>
                    cancel
                  </Button>
                </DialogActions>
              </Form>
            );
          }}
        </Formik>
      </Dialog>
    </>
  );
};

export default Products;
