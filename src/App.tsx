import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReactDiff from './editorsDiff/ReactDiff';
import ReactDiffContinued from './editorsDiff/ReactDiffContinued';
import EditorViewer from './editorsDiff/EditorViewer';

const App = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
      return (<Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="React Diff View" value="1" />
              <Tab label="React Diff Viewer Continued" value="2" />
              <Tab label="Editor text faked" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><ReactDiff /></TabPanel>
          <TabPanel value="2"><ReactDiffContinued /></TabPanel>
          <TabPanel value="3"><EditorViewer /></TabPanel>
        </TabContext>
      </Box>)
}

export default App;