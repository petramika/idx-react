import ReactDiffViewer from "react-diff-viewer-continued";
import Prism from "prismjs";
import { Highlight, themes } from "prism-react-renderer";

const oldCode = `
Presentation Summary
21-Jun-2023
Matic Rogar
Discovery1
Australia
Product Category Product Sub Category Product Sales Net Profi
Accessories Bottles and Cages Water Bottle - 30 oz. 75.75
Helmets Sport-100 Helmet, Black 59.59
Sport-100 Helmet, Blue 77.77
Sport-100 Helmet, Red 134.64
Panniers Touring-Panniers, Large 106.08
Pumps Mountain Pump 115.00
Tires and Tubes HL Road Tire 76.22
LL Mountain Tire 28.08
Mountain Tire Tube 66.59
Patch Kit/8 Patches 54.06
Bikes Mountain Bikes Mountain-100 Black, 44 3,312.48 7
Mountain-100 Silver, 38 2,020.00 2
Mountain-200 Black, 42 1,530.00 3
Mountain-200 Black, 46 3,744.00 4
Mountain-200 Silver, 42 1,919.00 2
Mountain-400-W Silver, 40 1,891.08 3
Mountain-400-W Silver, 42 3,744.00 6
21-Jun-2023 2
Net Profit
Values
Net Margin [Y2]
240.84 906.03K
Discovery2
Net Profit 2019 1.00M 1.00K
800.00K 800.00
600.00K 600.00
400.00K 400.00
200.00K 200.00
0.00 0.00
Australia Canada France Germany United Kingdom United States
2020 250.00K 200.00
200.00K
150.00
150.00K
100.00
100.00K
50.00
50.00K
0.00 0.00
Australia Canada France Germany United Kingdom United States
21-Jun-2023 3
21-Jun-2023 4
`;
const newCode = `
Presentation Summary
21-Jun-2023
Matic Rogar
Discovery1
Country
Product Category Product Sub Category Product Sales Net Profit
Accessories Bike Racks Hitch Rack - 4-Bike 115.34 2
Bike Stands All-Purpose Bike Stand 268.24 6
Bottles and Cages Mountain Bottle Cage 1,296.21 30
Road Bottle Cage 293.78 8
Water Bottle - 30 oz. 1,222.67 28
Cleaners Bike Wash - Dissolver 326.82 11
Fenders Fender Set - Mountain 467.39 12
Helmets Sport-100 Helmet, Black 2,183.10 71
Sport-100 Helmet, Blue 2,595.58 76
Sport-100 Helmet, Red 1,374.99 29
Hydration Packs Hydration Pack - 70 oz. 296.97 7
Lights Headlights - Dual-Beam 971.11 26
Headlights - Weatherproof 1,167.10 38
Taillights - Battery-Powered 378.18 6
Locks Cable Lock 198.00 5
Other BB Ball Bearing 9.00
Bearing Ball 162.00 1
21-Jun-2023 2
Net Profit
Values
Net Margin [Y2]
240.84 906.03K
Discovery2
Net Profit 2019 1.00M 1.00K
800.00K 800.00
600.00K 600.00
400.00K 400.00
200.00K 200.00
0.00 0.00
Australia Canada France Germany United Kingdom United States
2020 250.00K 200.00
200.00K
150.00
150.00K
100.00
100.00K
50.00
50.00K
0.00 0.00
Australia Canada France Germany United Kingdom United States
21-Jun-2023 3
21-Jun-2023 4
`;

enum DiffMethod {
  CHARS = "diffChars",
  WORDS = "diffWords",
  WORDS_WITH_SPACE = "diffWordsWithSpace",
  LINES = "diffLines",
  TRIMMED_LINES = "diffTrimmedLines",
  SENTENCES = "diffSentences",
  CSS = "diffCss"
}

const ReactDiffContinued = () => {
  const highlightSyntax = (str: any) => (
    <Highlight
    theme={themes.oneLight}
    code={str}
    language="txt"
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
    <ReactDiffViewer
      leftTitle={"src/whatever/example.js"}
      oldValue={oldCode}
      newValue={newCode}
      splitView={true}
      compareMethod={DiffMethod.LINES}
      hideLineNumbers={false}
      renderContent={highlightSyntax}
    />
  );
}

export default ReactDiffContinued
