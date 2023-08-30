import { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

const Paginate = ({ items, Component }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 4;
  const pagesVisited = (pageNumber - 1) * itemsPerPage;
  const displayItems = items.slice(pagesVisited, pagesVisited + itemsPerPage);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const changePage = (event, val) => {
    setPageNumber(val);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Display a Typography component */}
        <Typography variant="h6">Displaying {displayItems.length} items</Typography>

        <Grid container spacing={5} alignItems="center">
          {displayItems.map((item, i) => (
            <Grid item key={i} xs={6} md={6} lg={6}>
              <Component instrument={item} key={i} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Pagination
          color="primary"
          variant="outlined"
          shape="rounded"
          count={pageCount}
          page={pageNumber}
          onChange={changePage}
        />
      </Box>
      <div style={{ marginBottom: 50 }}></div>
    </div>
  );
};

export default Paginate;