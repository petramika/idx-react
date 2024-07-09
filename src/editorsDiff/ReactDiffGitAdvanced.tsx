import { useEffect, useRef } from "react";
import * as Diff2Html from "diff2html";
import 'highlight.js/styles/github.css';
import 'diff2html/bundles/css/diff2html.min.css';
import { ColorSchemeType } from "diff2html/lib/types";
import { gitGhangesFormat } from "../utils/data";

const ReactDiffGitAdvanced = () => {
  const inputRef = useRef();

  useEffect(() => {
    var diffHtml = Diff2Html.html(
        gitGhangesFormat,
      {
        drawFileList: false,
        matching: "none",
        outputFormat: "side-by-side",
        renderNothingWhenEmpty: false,
		colorScheme: ColorSchemeType.LIGHT,
      }
    );

    inputRef.current.innerHTML = diffHtml
    
  }, []);

  return (
    <div ref={inputRef}></div>
  )

}

export default ReactDiffGitAdvanced
