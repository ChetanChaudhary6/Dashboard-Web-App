import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  // Access the current theme using the useTheme hook
  const theme = useTheme();
  // Extract colors from the theme using the tokens function
  const colors = tokens(theme.palette.mode);

  // Define columns for the DataGrid component
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      // Custom cell class name for styling
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zip Code", flex: 1 },
  ];

  return (
    <Box m="20px">
      {/* Header Component: Displays the title and subtitle for the page */}
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // Styling for DataGrid and its components
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            // Styling for custom cell class (name column)
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            // Styling for column headers
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            // Styling for virtual scroller background
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            // Styling for footer container
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            // Styling for checkboxes
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            // Styling for toolbar buttons
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* DataGrid Component: Displays tabular data with sorting, filtering, and pagination */}
        <DataGrid
          rows={mockDataContacts} // Data to be displayed
          columns={columns} // Columns configuration
          components={{ Toolbar: GridToolbar }} // Custom toolbar component
        />
      </Box>
    </Box>
  );
};

export default Contacts;
