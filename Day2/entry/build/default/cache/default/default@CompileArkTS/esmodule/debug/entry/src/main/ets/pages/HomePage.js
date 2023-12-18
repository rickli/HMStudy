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
import abilityAccessCtrl from '@ohos:abilityAccessCtrl';
import geoLocationManager from '@ohos:geoLocationManager';
import promptAction from '@ohos:promptAction';
import sensor from '@ohos:sensor';
import Intl from '@ohos:intl';
import { BackgroundUtil } from '@bundle:com.example.pedometerapp/entry/ets/common/utils/BackgroundUtil';
import { CompletionStatus } from '@bundle:com.example.pedometerapp/entry/ets/view/CompletionStatus';
import { CommonConstants } from '@bundle:com.example.pedometerapp/entry/ets/common/constants/CommonConstants';
import { CurrentSituation } from '@bundle:com.example.pedometerapp/entry/ets/view/CurrentSituation';
import LocationUtil from '@bundle:com.example.pedometerapp/entry/ets/common/utils/LocationUtil';
import Logger from '@bundle:com.example.pedometerapp/entry/ets/common/utils/Logger';
import NumberUtil from '@bundle:com.example.pedometerapp/entry/ets/common/utils/NumberUtil';
import StepsUtil from '@bundle:com.example.pedometerapp/entry/ets/common/utils/StepsUtil';
const TAG = 'HomePage';
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentSteps = new ObservedPropertySimplePU(CommonConstants.INITIALIZATION_VALUE, this, "currentSteps");
        this.__stepGoal = new ObservedPropertySimplePU('', this, "stepGoal");
        this.addProvidedVar("stepGoal", this.__stepGoal);
        this.__oldSteps = new ObservedPropertySimplePU('', this, "oldSteps");
        this.__startPosition = new ObservedPropertySimplePU('', this, "startPosition");
        this.__currentLocation = new ObservedPropertySimplePU('', this, "currentLocation");
        this.__locale = new ObservedPropertySimplePU(new Intl.Locale().language, this, "locale");
        this.__latitude = new ObservedPropertySimplePU(0, this, "latitude");
        this.__longitude = new ObservedPropertySimplePU(0, this, "longitude");
        this.__progressValue = new ObservedPropertySimplePU(0, this, "progressValue");
        this.__isStart = new ObservedPropertySimplePU(false, this, "isStart");
        this.context = getContext(this);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentSteps !== undefined) {
            this.currentSteps = params.currentSteps;
        }
        if (params.stepGoal !== undefined) {
            this.stepGoal = params.stepGoal;
        }
        if (params.oldSteps !== undefined) {
            this.oldSteps = params.oldSteps;
        }
        if (params.startPosition !== undefined) {
            this.startPosition = params.startPosition;
        }
        if (params.currentLocation !== undefined) {
            this.currentLocation = params.currentLocation;
        }
        if (params.locale !== undefined) {
            this.locale = params.locale;
        }
        if (params.latitude !== undefined) {
            this.latitude = params.latitude;
        }
        if (params.longitude !== undefined) {
            this.longitude = params.longitude;
        }
        if (params.progressValue !== undefined) {
            this.progressValue = params.progressValue;
        }
        if (params.isStart !== undefined) {
            this.isStart = params.isStart;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentSteps.purgeDependencyOnElmtId(rmElmtId);
        this.__oldSteps.purgeDependencyOnElmtId(rmElmtId);
        this.__startPosition.purgeDependencyOnElmtId(rmElmtId);
        this.__currentLocation.purgeDependencyOnElmtId(rmElmtId);
        this.__locale.purgeDependencyOnElmtId(rmElmtId);
        this.__latitude.purgeDependencyOnElmtId(rmElmtId);
        this.__longitude.purgeDependencyOnElmtId(rmElmtId);
        this.__progressValue.purgeDependencyOnElmtId(rmElmtId);
        this.__isStart.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentSteps.aboutToBeDeleted();
        this.__stepGoal.aboutToBeDeleted();
        this.__oldSteps.aboutToBeDeleted();
        this.__startPosition.aboutToBeDeleted();
        this.__currentLocation.aboutToBeDeleted();
        this.__locale.aboutToBeDeleted();
        this.__latitude.aboutToBeDeleted();
        this.__longitude.aboutToBeDeleted();
        this.__progressValue.aboutToBeDeleted();
        this.__isStart.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentSteps() {
        return this.__currentSteps.get();
    }
    set currentSteps(newValue) {
        this.__currentSteps.set(newValue);
    }
    get stepGoal() {
        return this.__stepGoal.get();
    }
    set stepGoal(newValue) {
        this.__stepGoal.set(newValue);
    }
    get oldSteps() {
        return this.__oldSteps.get();
    }
    set oldSteps(newValue) {
        this.__oldSteps.set(newValue);
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
    get locale() {
        return this.__locale.get();
    }
    set locale(newValue) {
        this.__locale.set(newValue);
    }
    get latitude() {
        return this.__latitude.get();
    }
    set latitude(newValue) {
        this.__latitude.set(newValue);
    }
    get longitude() {
        return this.__longitude.get();
    }
    set longitude(newValue) {
        this.__longitude.set(newValue);
    }
    get progressValue() {
        return this.__progressValue.get();
    }
    set progressValue(newValue) {
        this.__progressValue.set(newValue);
    }
    get isStart() {
        return this.__isStart.get();
    }
    set isStart(newValue) {
        this.__isStart.set(newValue);
    }
    onPageShow() {
        this.init();
        this.requestPermissions();
    }
    onPageHide() {
        sensor.off(sensor.SensorId.PEDOMETER);
    }
    init() {
        StepsUtil.getStorageValue(CommonConstants.IS_START).then((res) => {
            if (res === CommonConstants.TRUE) {
                this.isStart = true;
                StepsUtil.getStorageValue(CommonConstants.CURRENT_STEPS).then((res) => {
                    if (StepsUtil.checkStrIsEmpty(res)) {
                        return;
                    }
                    this.currentSteps = res;
                });
                StepsUtil.getStorageValue(CommonConstants.PROGRESS_VALUE_TAG).then((res) => {
                    if (StepsUtil.checkStrIsEmpty(res)) {
                        return;
                    }
                    this.progressValue = NumberUtil._parseInt(res, 10);
                });
                StepsUtil.getStorageValue(CommonConstants.START_POSITION).then((res) => {
                    if (StepsUtil.checkStrIsEmpty(res)) {
                        return;
                    }
                    this.startPosition = res;
                });
                StepsUtil.getStorageValue(CommonConstants.OLD_STEPS).then((res) => {
                    if (StepsUtil.checkStrIsEmpty(res)) {
                        return;
                    }
                    this.oldSteps = res;
                });
            }
            else {
                this.isStart = false;
            }
        });
        StepsUtil.getStorageValue(CommonConstants.STEP_GOAL).then((res) => {
            if (StepsUtil.checkStrIsEmpty(res)) {
                return;
            }
            this.stepGoal = res;
        });
    }
    requestPermissions() {
        let atManager = abilityAccessCtrl.createAtManager();
        try {
            atManager.requestPermissionsFromUser(this.context, CommonConstants.REQUEST_PERMISSIONS).then((data) => {
                if (data.authResults[0] !== 0 || data.authResults[1] !== 0) {
                    return;
                }
                const that = this;
                try {
                    sensor.on(sensor.SensorId.PEDOMETER, (data) => {
                        try {
                            if (that.isStart) {
                                if (StepsUtil.checkStrIsEmpty(that.oldSteps)) {
                                    that.oldSteps = data.steps.toString();
                                    StepsUtil.putStorageValue(CommonConstants.OLD_STEPS, that.oldSteps);
                                }
                                else {
                                    that.currentSteps = (data.steps - NumberUtil._parseInt(that.oldSteps, 10)).toString();
                                }
                            }
                            else {
                                that.currentSteps = data.steps.toString();
                            }
                            if (StepsUtil.checkStrIsEmpty(that.stepGoal) || !that.isStart) {
                                return;
                            }
                            StepsUtil.putStorageValue(CommonConstants.CURRENT_STEPS, that.currentSteps);
                            that.progressValue = StepsUtil.getProgressValue(NumberUtil._parseInt(that.stepGoal, 10), NumberUtil._parseInt(that.currentSteps, 10));
                            StepsUtil.putStorageValue(CommonConstants.PROGRESS_VALUE_TAG, String(that.progressValue));
                        }
                        catch (err) {
                            Logger.error(TAG, 'Sensor on err' + JSON.stringify(err));
                        }
                    }, { interval: CommonConstants.SENSOR_INTERVAL });
                }
                catch (err) {
                    console.error('On fail, errCode: ' + JSON.stringify(err));
                }
                LocationUtil.geolocationOn((location) => {
                    if (this.latitude === location.latitude && this.longitude === location.longitude) {
                        return;
                    }
                    this.latitude = location.latitude;
                    this.longitude = location.longitude;
                    let reverseGeocodeRequest = {
                        'locale': this.locale.toString().includes('zh') ? 'zh' : 'en',
                        'latitude': this.latitude,
                        'longitude': this.longitude
                    };
                    geoLocationManager.getAddressesFromLocation(reverseGeocodeRequest).then(data => {
                        if (data[0].placeName) {
                            this.currentLocation = data[0].placeName;
                        }
                    }).catch((err) => {
                        Logger.error(TAG, 'GetAddressesFromLocation err ' + JSON.stringify(err));
                    });
                });
            }).catch((err) => {
                Logger.error(TAG, 'requestPermissionsFromUser err' + JSON.stringify(err));
            });
        }
        catch (err) {
            Logger.error(TAG, 'requestPermissionsFromUser err' + JSON.stringify(err));
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.width(CommonConstants.FULL_WIDTH);
            Stack.height(CommonConstants.FULL_HEIGHT);
            Stack.backgroundColor(Color.White);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new CompletionStatus(this, {
                        progressValue: this.__progressValue
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new CurrentSituation(this, {
                        currentSteps: this.currentSteps,
                        startPosition: this.startPosition,
                        currentLocation: this.currentLocation
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        currentSteps: this.currentSteps,
                        startPosition: this.startPosition,
                        currentLocation: this.currentLocation
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777244, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777245, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } });
            Row.justifyContent(FlexAlign.Center);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.isStart ? { "id": 16777235, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" } : { "id": 16777231, "type": 10003, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.width({ "id": 16777291, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.height({ "id": 16777289, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.borderRadius({ "id": 16777290, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777237, "type": 10001, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.fontSize({ "id": 16777292, "type": 10002, params: [], "bundleName": "com.example.pedometerapp", "moduleName": "entry" });
            Button.fontColor(Color.White);
            Button.fontWeight(CommonConstants.BIG_FONT_WEIGHT);
            Button.onClick(() => {
                if (this.isStart) {
                    this.isStart = false;
                    this.oldSteps = '';
                    StepsUtil.CleanStepsData();
                    BackgroundUtil.stopContinuousTask(this.context);
                }
                else {
                    if (this.stepGoal === '' || this.currentLocation === '') {
                        promptAction.showToast({ message: CommonConstants.WAIT });
                    }
                    else {
                        this.isStart = true;
                        this.startPosition = this.currentLocation;
                        StepsUtil.putStorageValue(CommonConstants.START_POSITION, this.startPosition);
                        this.currentSteps = CommonConstants.INITIALIZATION_VALUE;
                        this.progressValue = 0;
                        BackgroundUtil.startContinuousTask(this.context);
                    }
                }
                StepsUtil.putStorageValue(CommonConstants.IS_START, String(this.isStart));
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new HomePage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=HomePage.js.map