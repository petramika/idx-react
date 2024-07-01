import { diffLines, formatLines } from 'unidiff';
import { Diff, Hunk, parseDiff } from 'react-diff-view';

import 'react-diff-view/style/index.css';

const EMPTY_HUNKS: never[] = [];

const oldText = '[\n' +
  '    {\n' +
  '        "age": "22",\n' +
  '        "name": "Niroj"\n' +
  '    },\n' +
  '    {\n' +
  '        "age": "20",\n' +
  '        "name": "Dey"\n' +
  '    }\n' +
  ']\n';

const newText = '[\n' +
  '    {\n' +
  '        "age": "22",\n' +
  '        "name": "Niroj"\n' +
  '    },\n' +
  '    {\n' +
  '        "age": "20",\n' +
  '        "name": "Dey1"\n' +
  '    }\n' +
  ']\n';

const ReactDiff = () => {
  const diffText = formatLines(diffLines(oldText, newText), { context: 3 });
  const [diff] = parseDiff(diffText, { nearbySequences: 'zip' });

  return (
    <div>
      <main>
        <Diff 
        viewType="unified" 
        diffType='modify' 
        hunks={diff.hunks || EMPTY_HUNKS}
        >
          {hunks =>
            hunks.map(hunk => (
              <Hunk key={hunk.content} hunk={hunk} />
            ))
          }
        </Diff>
      </main>
    </div>
  );
}

export default ReactDiff
