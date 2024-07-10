import { Diff, Hunk, getCollapsedLinesCountBetween, parseDiff, tokenize } from 'react-diff-view';
import * as refractor from 'refractor';
import { rawFileSimulator } from '../utils/data';
import { useEffect, useMemo, useState } from 'react';
import { diffLines, formatLines } from 'unidiff';
// import these in the project
import 'prism-themes/themes/prism-vs.css';
import 'react-diff-view/style/index.css';
import { Link } from '@mui/material';

const EMPTY_HUNKS: never[] = [];

const EditorReactDiffView = () => {
    const [{ type, hunks }, setDiff] = useState('');

    const tokens = useMemo(() => {
        if (!hunks) {
            return undefined;
        }
        const options = {
            refractor,
            highlight: true,
            language: 'xml',
        };

        try {
            return tokenize(hunks, options);
        } catch (ex) {
            return undefined;
        }
    }, [hunks]);

    useEffect(() => {
        const diffText = formatLines(diffLines(rawFileSimulator, "", { newlineIsToken: true }), { context: 3 });
        const [diff] = parseDiff(diffText, { nearbySequences: 'zip' });
        console.log(getCollapsedLinesCountBetween(diffText[10], diffText[20]))
        setDiff(diff);
    }, [])


    return (
        <div>
            <span> For this: <Link href='https://github.com/otakustay/react-diff-view?tab=readme-ov-file#customize-styles' target="_blank" rel="noopener">customize props </Link></span>
            <Diff
                viewType="unified"
                diffType={type}
                hunks={hunks || EMPTY_HUNKS}
                tokens={tokens}
            >
                {(hunks) => hunks.map((hunk) => <Hunk key={hunk.content} hunk={hunk} />)}
            </Diff>
        </div>
    );
}

export default EditorReactDiffView