import { useLayoutEffect } from "react";
import 'diff2html/bundles/css/diff2html.min.css';
import { ColorSchemeType } from "diff2html/lib/types";
import 'diff2html/bundles/js/diff2html-ui.min.js'
import { gitGhangesFormat } from "../utils/data";

const ReactDiffGitUI = () => {
    useLayoutEffect(() => {
    const Diff2HtmlUI = window.Diff2HtmlUI;

    const targetElement = document.getElementById('destination-elem-id');

    const diff2htmlUi = new Diff2HtmlUI(
        targetElement, 
        gitGhangesFormat, {
            drawFileList: false,
            matching: "none",
            outputFormat: "side-by-side",
            renderNothingWhenEmpty: false,
            colorScheme: ColorSchemeType.LIGHT,
          }
          );

          diff2htmlUi.draw();
          diff2htmlUi.highlightCode();
          diff2htmlUi.fileListToggle(false);
  }, []);

  return (
    <div id="destination-elem-id"></div>
  )

}

export default ReactDiffGitUI
