import ReactDiffViewer from "react-diff-viewer-continued";
import Prism from "prismjs";
import { Box } from "@mui/material";
import { Highlight, themes } from "prism-react-renderer";

const oldCode = `
const ReactDiffContinued = () => {
  const highlightSyntax = (str: any) => (
    <pre
      style={{ display: "inline" }}
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(str, Prism.languages.txt, 'txt')
      }}
    />
  );

  return (
    <ReactDiffViewer
      leftTitle={"src/whatever/example.js"}
      oldValue={oldCode}
      newValue={newCode}
      splitView={false}
      compareMethod={DiffMethod.LINES}
      hideLineNumbers={false}
      renderContent={highlightSyntax}
    />
  );
}
`;
const newCode = ``;

enum DiffMethod {
  CHARS = "diffChars",
  WORDS = "diffWords",
  WORDS_WITH_SPACE = "diffWordsWithSpace",
  LINES = "diffLines",
  TRIMMED_LINES = "diffTrimmedLines",
  SENTENCES = "diffSentences",
  CSS = "diffCss"
}

const EditorViewer = () => {
  const highlightSyntax = (str: any) => (
    <Highlight
    theme={themes.oneLight}
    code={str}
    language="jsx"
  >
    {({ tokens, getTokenProps }) => (
      <pre >
        {tokens.map((line, i) => (
          <div key={i}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight> 
  );

  return (
    <Box className='editor-viewer'>
      <ReactDiffViewer
        hideMarkers={true}
        leftTitle={"src/whatever/example.js"}
        oldValue={oldCode}
        newValue={oldCode}
        splitView={false}
        disableWordDiff={true}
        showDiffOnly={false}
        renderContent={highlightSyntax}
      />
    </Box>
  );
}

export default EditorViewer
