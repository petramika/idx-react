/*
// wrapper using import * as Diff2Html from "diff2html"; for async urls
// not working, resource giving 500

import { CodeDiff } from "react-code-differ";

const ReactCodeDiffer = () => {
  const path = "https://api.github.com/repos/rtfpessoa/diff2html/pulls/106"
  return (
    <CodeDiff type={"github"} path={path} />
  );
};

export default ReactCodeDiffer*/