import { useEffect, useRef } from "react";
import * as Diff2Html from "diff2html";
import 'highlight.js/styles/github.css';
import 'diff2html/bundles/css/diff2html.min.css';
import { ColorSchemeType } from "diff2html/lib/types";
import 'diff2html/bundles/js/diff2html-ui.min.js'
import { gitGhangesFormat } from "../utils/data";

const ReactDiffGit = () => {
  const ref = useRef()

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

    ref.current.innerHTML = diffHtml;
  }, []);

  // import DOMPurify from 'dompurify';
  // please dont dangerouslySetInnerHTML, can lead to XSS atack, purify before injecting
  // setDiff(DOMPurify.sanitize(diffHtml)); -> alternative or useRef
  // <div id="destination-elem-id" dangerouslySetInnerHTML={{ __html: diff }}></div>

  return (
    <div ref={ref} id="destination-elem-id"></div>
  )

}

export default ReactDiffGit
