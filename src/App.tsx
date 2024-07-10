import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ReactDiffContinued from './editorsDiff/ReactDiffContinued';
import EditorReactDiffViewer from './editorsDiff/EditorReactDiffViewer';
import ReactDiffGitAdvanced from './editorsDiff/ReactDiffGitAdvanced';
import ReactDiffGit from './editorsDiff/ReactDiffGit';
import ReactDiffGitUI from './editorsDiff/ReactDiffGitUI';
import GitDiffView from './editorsDiff/GitDiffView';
import ReactDiffView from './editorsDiff/ReactDiffView';
import EditorReactDiffView from './editorsDiff/EditorReactDiffView';

const App = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (<Box sx={{ width: '100%', typography: 'body1' }}>
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList onChange={handleChange} aria-label="lab API tabs example">
          <Tab label="Diff2Html Git" wrapped value="1" />
          <Tab label="Diff2Html Git UI" wrapped value="2" />
          <Tab label="Diff2Html Advanced" wrapped value="3" />
          <Tab label="React Diff Viewer Continued" wrapped value="4" />
          <Tab label="Editor React Diff Viewer Continued" wrapped value="5" />
          <Tab label="Git Diff View" wrapped value="6" />
          <Tab label="React Diff View" wrapped value="7" />
          <Tab label="Editor React Diff Viewer" wrapped value="8" />
        </TabList>
      </Box>
      <TabPanel value="1"><ReactDiffGit /></TabPanel>
      <TabPanel value="2"><ReactDiffGitUI /></TabPanel>
      <TabPanel value="3"><ReactDiffGitAdvanced /></TabPanel>
      <TabPanel value="4"><ReactDiffContinued /></TabPanel>
      <TabPanel value="5"><EditorReactDiffViewer /></TabPanel>
      <TabPanel value="6"><GitDiffView /></TabPanel>
      <TabPanel value="7"><ReactDiffView /></TabPanel>
      <TabPanel value="8"><EditorReactDiffView /></TabPanel>
    </TabContext>
  </Box>)
}

export default App;