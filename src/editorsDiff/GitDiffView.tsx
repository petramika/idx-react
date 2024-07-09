import { DiffModeEnum, DiffView } from "@git-diff-view/react";
import "@git-diff-view/react/styles/diff-view.css";
import { gitGhangesFormat } from "../utils/data";

const GitDiffView = () => {
    return (
        <DiffView
            data={{hunks: [gitGhangesFormat]}}
            diffViewFontSize={16}
            diffViewHighlight={true}
            diffViewMode={DiffModeEnum.Split}
            diffViewWrap={true}
            diffViewAddWidget
        />
    );
}

export default GitDiffView
