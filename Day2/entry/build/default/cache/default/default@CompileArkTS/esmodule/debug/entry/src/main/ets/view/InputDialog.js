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
export default class InputDialog extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__stepGoal = this.initializeConsume("stepGoal", "stepGoal");
        this.controller = undefined;
        this.cancel = undefined;
        this.confirm = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.cancel !== undefined) {
            this.cancel = params.cancel;
        }
        if (params.confirm !== undefined) {
            this.confirm = params.confirm;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__stepGoal.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get stepGoal() {
        return this.__stepGoal.get();
    }
    set stepGoal(newValue) {
        this.__stepGoal.set(newValue);
    }
    setController(ctr) {
        this.controller = ctr;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.DIALOG_WIDTH);
            Column.borderRadius({ "id": 16777256, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width(CommonConstants.FULL_WIDTH);
            Text.height({ "id": 16777267, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontSize({ "id": 16777266, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.textAlign(TextAlign.Start);
            Text.margin({
                top: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: this.stepGoal === '' ? { "id": 16777225, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } : this.stepGoal });
            TextInput.width(CommonConstants.FULL_WIDTH);
            TextInput.type(InputType.Number);
            TextInput.fontSize({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            TextInput.alignSelf(ItemAlign.Start);
            TextInput.backgroundColor(Color.White);
            TextInput.margin({
                top: { "id": 16777307, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777304, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            TextInput.onChange((value) => {
                this.stepGoal = value;
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.width(CommonConstants.DIVIDER_WIDTH);
            Divider.height({ "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.vertical(false);
            Divider.color({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.strokeWidth(CommonConstants.DIVIDER_STROKE_WIDTH);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({
                top: { "id": 16777286, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                bottom: { "id": 16777284, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" },
                left: { "id": 16777285, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777308, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777302, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.fontSize({ "id": 16777301, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.margin({ right: { "id": 16777306, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            Text.onClick(() => {
                if (this.controller) {
                    this.controller.close();
                }
                if (this.cancel) {
                    this.cancel();
                }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Divider.create();
            Divider.height({ "id": 16777259, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.vertical(true);
            Divider.color({ "id": 16777239, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Divider.strokeWidth(CommonConstants.DIVIDER_STROKE_WIDTH);
            if (!isInitialRender) {
                Divider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.width({ "id": 16777308, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.height({ "id": 16777302, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Text.fontSize({ "id": 16777301, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.margin({ left: { "id": 16777305, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            Text.fontColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Text.onClick(() => {
                if (this.controller) {
                    this.controller.close();
                }
                if (this.confirm) {
                    this.confirm();
                }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=InputDialog.js.map