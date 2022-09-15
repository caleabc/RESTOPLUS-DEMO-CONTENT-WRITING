// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Content1 from "../components/content1";

// utils
import gridJustifyContentCenter from "../utils/gridJustifyContentCenter";

function Activity1() {
  return (
    <Grid overrides={gridJustifyContentCenter}>
      <Cell span={6}>
        <Content1 />
      </Cell>
    </Grid>
  );
}

export default Activity1;
