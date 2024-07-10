import { useEffect, useRef, useState } from "react";
import * as Diff2Html from "diff2html";
import 'highlight.js/styles/github.css';
import 'diff2html/bundles/css/diff2html.min.css';
import { ColorSchemeType } from "diff2html/lib/types";
import 'diff2html/bundles/js/diff2html-ui.min.js'
import { gitChangesFormat } from "../utils/data";
import DOMPurify from 'dompurify';

const ReactDiffGit = () => {
  const [diff, setDiff] = useState('');

  useEffect(() => {
    
    var diffHtml = Diff2Html.html(
        gitChangesFormat,
      {
        drawFileList: false,
        matching: "none",
        outputFormat: "side-by-side",
        renderNothingWhenEmpty: false,
		colorScheme: ColorSchemeType.LIGHT,
      }
    );

  // alternative or useRef
  setDiff(DOMPurify.sanitize(diffHtml));
  }, []);


// please dont dangerouslySetInnerHTML, can lead to XSS atack, purify before injecting
  return (
    <div id="destination-elem-id" dangerouslySetInnerHTML={{ __html: diff }}></div>
  )

}

export default ReactDiffGit
