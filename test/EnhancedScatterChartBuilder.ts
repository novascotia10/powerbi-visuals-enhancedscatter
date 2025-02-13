/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

import powerbiVisualsApi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;

// powerbi.extensibility.utils.test
import { VisualBuilderBase } from "powerbi-visuals-utils-testutils";

// EnhancedScatterChart1443994985041
import { EnhancedScatterChartMock as VisualClass } from "../test/EnhancedScatterChartMock";

export class EnhancedScatterChartBuilder extends VisualBuilderBase<VisualClass> {
    constructor(width: number, height: number) {
        super(width, height, "EnhancedScatterChart1443994985041");
    }

    protected build(options: VisualConstructorOptions) {
        return new VisualClass(options);
    }

    public get instance(): VisualClass {
        return this.visual;
    }

    public get mainElement(): HTMLElement {
        return this.element.querySelector(".enhancedScatterChart");
    }

    public get axisGraphicsContext(): HTMLElement {
        return this.mainElement.querySelector(".axisGraphicsContext");
    }

    public get backdropImage(): SVGImageElement {
        return this.axisGraphicsContext.querySelector("image");
    }

    public get xAxis(): HTMLElement {
        return this.axisGraphicsContext.querySelector("g.x.axis");
    }

    public get xAxisTicks(): NodeListOf<HTMLElement> {
        return this.xAxis.querySelectorAll("g.tick");
    }

    public get xAxisLabel(): HTMLElement {
        return this.axisGraphicsContext.querySelector(".xAxisLabel");
    }

    public get yAxis(): HTMLElement {
        return this.svgScrollableAxisGraphicsContext.querySelector("g.y.axis");
    }

    public get yAxisTicks(): NodeListOf<HTMLElement> {
        return this.yAxis.querySelectorAll("g.tick");
    }

    public get yAxisLabel(): HTMLElement {
        return this.axisGraphicsContext.querySelector(".yAxisLabel");
    }

    public get svgScrollableAxisGraphicsContext(): HTMLElement {
        return this.mainElement
            .querySelector(".svgScrollable")
            .querySelector(".axisGraphicsContext");
    }

    public get mainGraphicsContext(): HTMLElement {
        return this.svgScrollableAxisGraphicsContext.querySelector(".mainGraphicsContext");
    }

    public get dataLabels(): NodeListOf<HTMLElement> {
        return this.mainGraphicsContext.querySelectorAll(".labels");
    }

    public get dataLabelsText(): HTMLElement[] {
        const texts: HTMLElement[] = [];
        [].forEach.call(this.dataLabels, function(element) {
            const text: HTMLElement = element.querySelectorAll("text.data-labels");
            texts.push(text);
        });

        return texts;
    }

    public get crosshair(): HTMLElement {
        return this.mainGraphicsContext
            .querySelector("svg")
            .querySelector("g.crosshairCanvas");
    }

    public get dots(): NodeListOf<HTMLElement> {
        return this.mainGraphicsContext
            .querySelector("svg")
            .querySelector("g.ScatterMarkers")
            .querySelectorAll("path.dot");
    }

    public get images(): NodeListOf<HTMLElement> {
        return this.mainGraphicsContext
            .querySelector("svg")
            .querySelector("g.ScatterMarkers")
            .querySelectorAll("image.img");
    }

    public get legendGroup(): HTMLElement {
        return this.element
            .querySelector(".legend")
            .querySelector("#legendGroup");
    }

    public get legendTitle(): HTMLElement {
        return this.legendGroup.querySelector(".legendTitle");
    }

    public get legendItemText(): HTMLElement[] {
        const legendItems: NodeListOf<HTMLElement> = this.legendGroup.querySelectorAll(".legendItem");
        const legendTexts: HTMLElement[] = [];

        [].forEach.call(legendItems, function(element) {
            const legendText: HTMLElement = element.querySelectorAll("text.legendText");
            legendTexts.push(legendText);
        });

        return legendTexts;
    }

    public get externalImageTelemetryTracedProperty(): boolean {
        return this.visual.getExternalImageTelemetryTracedProperty();
    }
}
