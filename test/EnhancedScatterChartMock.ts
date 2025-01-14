import { EnhancedScatterChart } from "../src/EnhancedScatterChart";

export interface SelectionState {
    items: string;
    state: boolean;
}

export class EnhancedScatterChartMock extends EnhancedScatterChart{

    protected override telemetryTrace(): void {
        this.externalImageTelemetryTraced();
    }
}