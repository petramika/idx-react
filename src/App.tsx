import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReactDiffContinued from './editorsDiff/ReactDiffContinued';
import EditorViewer from './editorsDiff/EditorViewer';
import ReactDiffGitAdvanced from './editorsDiff/ReactDiffGitAdvanced';
import ReactDiffGit from './editorsDiff/ReactDiffGit';
import ReactDiffGitUI from './editorsDiff/ReactDiffGitUI';
import GitDiffView from './editorsDiff/GitDiffView';
import ReactDiffView from './editorsDiff/ReactDiffView';

const App = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
      return (<Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="React Diff Git" value="1" />
              <Tab label="React diff Git UI" value="2" />
              <Tab label="React Diff Viewer Continued" value="3" />
              <Tab label="Editor text faked" value="4" />
              <Tab label="React diff view advanced" value="5" />
              <Tab label="Git Diff View" value="6" />
              <Tab label="React Diff View" value="7" />
            </TabList>
          </Box>
          <TabPanel value="7"><ReactDiffGit /></TabPanel>
          <TabPanel value="2"><ReactDiffGitUI /></TabPanel>
          <TabPanel value="3"><ReactDiffContinued /></TabPanel>
         <TabPanel value="4"><EditorViewer /></TabPanel>
          <TabPanel value="5"><ReactDiffGitAdvanced /></TabPanel>
          <TabPanel value="6"><GitDiffView /></TabPanel>
          <TabPanel value="1"><ReactDiffView /></TabPanel>
        </TabContext>
      </Box>)
}

export default App;