import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  FormLabel,
} from "@mui/joy";
import { OpenInNew } from "@mui/icons-material";
import { Input } from "@mui/material";

type TableRow = {
  id: string;
  rfc: string;
  razonSocial: string | null;
  estado: string;
  email: string;
  fechaCreacion: string;
};
export default function OrderTable() {
  const [tableData, setTableData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://rvla3m2r9j.execute-api.us-east-1.amazonaws.com/Prod/GetVinculaciones",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        setTableData(
          data.vinculaciones.map((vinculacion: any) => ({
            id: vinculacion.id,
            rfc: vinculacion.rfc,
            razonSocial: vinculacion.nombreContribuyente,
            estado: vinculacion.status,
            email: vinculacion.email,
            fechaCreacion: new Date(vinculacion.fechaCreacion).toLocaleString(),
          }))
        );
        setLoading(!loading);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);
  const redirectToDetalleVinculacion = (id: string) => {
    window.location.href = `https://d3m9x71b230tzd.cloudfront.net/detalleVinculacion?id=${id}`;
  };
  return (
    <React.Fragment>
      {loading && (
        <Sheet
          className="OrderTableContainer"
          variant="outlined"
          sx={{
            display: { xs: "none", sm: "initial" },
            width: "100%",
            borderRadius: "sm",
            flexShrink: 1,
            overflow: "auto",
            minHeight: 0,
          }}
        >
          <Table
            aria-labelledby="tableTitle"
            stickyHeader
            hoverRow
            sx={{
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
              "--Table-headerUnderlineThickness": "1px",
              "--TableRow-hoverBackground":
                "var(--joy-palette-background-level1)",
              "--TableCell-paddingY": "10px",
              "--TableCell-paddingX": "20px",
            }}
          >
            <thead>
              <tr>
                <th>RFC</th>
                <th>Razón Social</th>
                <th>Estado</th>
                <th>Email</th>
                <th>Fecha Creación</th>
                <th>Opciones</th>
              </tr>
            </thead>
          </Table>
          <Box display={"flex"} justifyContent={"center"} p={5}>
            <CircularProgress />
          </Box>
        </Sheet>
      )}
      {!loading && (
        <>
          <Sheet
            className="OrderTableContainer"
            variant="outlined"
            sx={{
              width: "100%",
              borderRadius: "sm",
              flexShrink: 1,
              overflow: "auto",
              minHeight: 0,
            }}
          >
            <Table
              aria-labelledby="tableTitle"
              stickyHeader
              hoverRow
              sx={{
                "--TableCell-headBackground":
                  "var(--joy-palette-background-level1)",
                "--Table-headerUnderlineThickness": "1px",
                "--TableRow-hoverBackground":
                  "var(--joy-palette-background-level1)",
                "--TableCell-paddingY": "10px",
                "--TableCell-paddingX": "20px",
              }}
            >
              <thead>
                <tr>
                  <th>RFC</th>
                  <th>Razón Social</th>
                  <th>Estado</th>
                  <th>Email</th>
                  <th>Fecha Creación</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.rfc}</td>
                    <td>{row.razonSocial}</td>
                    <td>
                      <Chip color="success" size="md" variant="soft">
                        {row.estado}
                      </Chip>
                    </td>
                    <td>{row.email}</td>
                    <td>{row.fechaCreacion}</td>
                    <td>
                      <Button
                        onClick={() => redirectToDetalleVinculacion(row.id)}
                        color="primary"
                        size="sm"
                        variant="plain"
                        startDecorator={<OpenInNew />}
                      >
                        Ver Detalle
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Sheet>
        </>
      )}
    </React.Fragment>
  );
}
