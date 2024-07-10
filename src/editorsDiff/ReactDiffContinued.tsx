import ReactDiffViewer from "react-diff-viewer-continued";
import { Highlight, themes } from "prism-react-renderer";
import { prevRawFileSimulator, rawFileSimulator } from "../utils/data";

const ReactDiffContinued = () => {

  const highlightSyntax = (str: any) => {
    if(!str) return (<></>)
    return (
    <Highlight
    theme={themes.oneLight}
    code={str}
    language="xml"
  >
    {({ tokens, getTokenProps }) => (
      <pre>
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
  )
};

  return (
    <ReactDiffViewer
      leftTitle={"src/whatever/example.js"}
      oldValue={rawFileSimulator}
      newValue={prevRawFileSimulator}
      splitView={false}
      hideLineNumbers={false}
      renderContent={highlightSyntax}
    />
  );
}

export default ReactDiffContinued
