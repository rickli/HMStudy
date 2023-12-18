/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonConstants } from '@bundle:com.example.pedometerapp/entry/ets/common/constants/CommonConstants';
export class CurrentSituation extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentSteps = new SynchedPropertySimpleOneWayPU(params.currentSteps, this, "currentSteps");
        this.__startPosition = new SynchedPropertySimpleOneWayPU(params.startPosition, this, "startPosition");
        this.__currentLocation = new SynchedPropertySimpleOneWayPU(params.currentLocation, this, "currentLocation");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentSteps !== undefined) {
            this.__currentSteps.set(params.currentSteps);
        }
        else {
            this.__currentSteps.set('');
        }
        if (params.startPosition !== undefined) {
            this.__startPosition.set(params.startPosition);
        }
        else {
            this.__startPosition.set('');
        }
        if (params.currentLocation !== undefined) {
            this.__currentLocation.set(params.currentLocation);
        }
        else {
            this.__currentLocation.set('');
        }
    }
    updateStateVars(params) {
        this.__currentSteps.reset(params.currentSteps);
        this.__startPosition.reset(params.startPosition);
        this.__currentLocation.reset(params.currentLocation);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentSteps.purgeDependencyOnElmtId(rmElmtId);
        this.__startPosition.purgeDependencyOnElmtId(rmElmtId);
        this.__currentLocation.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentSteps.aboutToBeDeleted();
        this.__startPosition.aboutToBeDeleted();
        this.__currentLocation.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentSteps() {
        return this.__currentSteps.get();
    }
    set currentSteps(newValue) {
        this.__currentSteps.set(newValue);
    }
    get startPosition() {
        return this.__startPosition.get();
    }
    set startPosition(newValue) {
        this.__startPosition.set(newValue);
    }
    get currentLocation() {
        return this.__currentLocation.get();
    }
    set currentLocation(newValue) {
        this.__currentLocation.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777252, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777288, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.SITUATION_WIDTH);
            Column.borderRadius({ "id": 16777287, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777236, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width(CommonConstants.FULL_WIDTH);
            Text.height({ "id": 16777310, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777314, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.SMALL_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            Text.margin({
                top: { "id": 16777313, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777311, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777312, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777251, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Row.margin({
                top: { "id": 16777250, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777248, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777249, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777223, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777253, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777243, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777233, "type": 10003, params: [this.currentSteps], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777283, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.vertical(false);
            Divider.color({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.strokeWidth(CommonConstants.DIVIDER_STROKE_WIDTH);
            Divider.margin({
                left: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                right: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777294, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Row.margin({
                top: { "id": 16777278, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777276, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777277, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777293, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777243, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.startPosition);
            Text.width({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777275, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(CommonConstants.MAX_LINE);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.vertical(false);
            Divider.color({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.strokeWidth(CommonConstants.DIVIDER_STROKE_WIDTH);
            Divider.margin({
                left: { "id": 16777260, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                right: { "id": 16777261, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Row.margin({
                top: { "id": 16777271, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777269, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777270, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777254, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777268, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777243, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.currentLocation);
            Text.width({ "id": 16777258, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777257, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(CommonConstants.MAX_LINE);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=CurrentSituation.js.map