import { Box } from "@mui/material";

export const PageLayout: React.FC<{children?: React.ReactNode}> = ({children}) => {
  return (
    <Box  display='flex' flexGrow={1}>
      <Box 
        component='main' 
        display='flex' 
        flexDirection='column' 
        flexGrow={1}
        sx={{ overflowX:'hidden' }}
      >
        {children}
      </Box>
    </Box>
  );
};
