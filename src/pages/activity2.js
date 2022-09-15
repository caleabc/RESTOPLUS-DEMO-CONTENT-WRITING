// libraries
import { Grid, Cell } from "baseui/layout-grid";

// components
import Content2 from "../components/content2";

// utils
import gridJustifyContentCenter from "../utils/gridJustifyContentCenter";

function Activity2() {
  return (
    <Grid overrides={gridJustifyContentCenter}>
      <Cell span={6}>
        <Content2 />
      </Cell>
    </Grid>
  );
}

export default Activity2;
