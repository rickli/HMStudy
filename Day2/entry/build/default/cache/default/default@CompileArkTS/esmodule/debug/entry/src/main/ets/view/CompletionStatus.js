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
import InputDialog from '@bundle:com.example.pedometerapp/entry/ets/view/InputDialog';
import Logger from '@bundle:com.example.pedometerapp/entry/ets/common/utils/Logger';
import StepsUtil from '@bundle:com.example.pedometerapp/entry/ets/common/utils/StepsUtil';
const TAG = 'CompletionStatus';
export class CompletionStatus extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__progressValue = new SynchedPropertySimpleTwoWayPU(params.progressValue, this, "progressValue");
        this.__stepGoal = this.initializeConsume("stepGoal", "stepGoal");
        this.inputDialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new InputDialog(this, {
                    cancel: this.inputDialogCancel,
                    confirm: this.inputDialogConfirm
                });
                jsDialog.setController(this.inputDialogController);
                ViewPU.create(jsDialog);
            },
            autoCancel: false,
            customStyle: true,
            alignment: DialogAlignment.Bottom,
            offset: { dx: CommonConstants.OFFSET_DX, dy: CommonConstants.OFFSET_DY }
        }, this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.inputDialogController !== undefined) {
            this.inputDialogController = params.inputDialogController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__progressValue.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__progressValue.aboutToBeDeleted();
        this.__stepGoal.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get progressValue() {
        return this.__progressValue.get();
    }
    set progressValue(newValue) {
        this.__progressValue.set(newValue);
    }
    get stepGoal() {
        return this.__stepGoal.get();
    }
    set stepGoal(newValue) {
        this.__stepGoal.set(newValue);
    }
    inputDialogCancel() {
        Logger.info(TAG, 'Callback when the cancel button is clicked');
    }
    inputDialogConfirm() {
        if (StepsUtil.checkStrIsEmpty(this.stepGoal)) {
            return;
        }
        StepsUtil.putStorageValue(CommonConstants.STEP_GOAL, this.stepGoal);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.FULL_WIDTH);
            Column.backgroundImage({ "id": 16777315, "type": 20000, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                value: 0,
                total: CommonConstants.PROGRESS_TOTAL,
                type: ProgressType.Ring
            });
            Progress.color(Color.White);
            Progress.value(this.progressValue);
            Progress.width({ "id": 16777282, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Progress.style({
                strokeWidth: CommonConstants.PROGRESS_STROKE_WIDTH,
                scaleCount: CommonConstants.PROGRESS_SCALE_COUNT,
                scaleWidth: CommonConstants.PROGRESS_SCALE_WIDTH
            });
            Progress.margin({ top: { "id": 16777279, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            Progress.borderRadius(CommonConstants.PROGRESS_BORDER_RADIUS);
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.width({ "id": 16777298, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.height({ "id": 16777296, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.borderRadius({ "id": 16777297, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.fontSize({ "id": 16777295, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.fontColor({ "id": 16777238, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.fontWeight(CommonConstants.SMALL_FONT_WEIGHT);
            Button.backgroundColor(Color.White);
            Button.margin({
                top: { "id": 16777300, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777299, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            Button.onClick(() => {
                this.inputDialogController.open();
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.progressValue.toString());
            Text.borderRadius({ "id": 16777281, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: { "id": 16777309, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(CommonConstants.PERCENT_SIGN);
            Text.borderRadius({ "id": 16777274, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.fontWeight(CommonConstants.SMALL_FONT_WEIGHT);
            Text.textAlign(TextAlign.Center);
            Text.margin({ top: { "id": 16777272, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=CompletionStatus.js.map