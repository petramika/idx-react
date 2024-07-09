import { Diff, Hunk, markEdits, markWord, parseDiff, tokenize } from 'react-diff-view';
import * as refractor from 'refractor';
import { gitGhangesFormat } from '../utils/data';
import { useEffect, useMemo, useState } from 'react';
import {diffLines, formatLines} from 'unidiff';
import 'prism-themes/themes/prism-vs.css';
import 'antd/dist/antd.min.css';
import 'react-diff-view/style/index.css';

const EMPTY_HUNKS: never[] = [];

const ReactDiffView = () => {
    const [{ type, hunks }, setDiff] = useState('');

    const tokens = useMemo(() => {
        if (!hunks) {
            return undefined;
        }
        const options = {
            refractor: refractor.hightlight,
            highlight: true,
            language: 'javascript',
        };
        return tokenize(hunks, options);
        try {
            return tokenize(hunks, options);
        } catch (ex) {
            return undefined;
        }
    }, [hunks]);

    useEffect(() => {
        const diffText = formatLines(diffLines("console.log(a)", "console.log(b)"), {context: 3});
        const [diff] = parseDiff(diffText, { nearbySequences: 'zip' });
        console.log(diff)
        setDiff(diff);
    },[])


    return (
        <div>
            <main>
                <Diff
                    viewType="unified"
                    diffType={type}
                    hunks={hunks || EMPTY_HUNKS}
                    tokens={tokens}
                >
                    {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
                </Diff>
            </main>
        </div>
    );
}

export default ReactDiffView