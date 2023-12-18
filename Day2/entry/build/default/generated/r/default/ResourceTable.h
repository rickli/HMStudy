/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

#ifndef RESOURCE_TABLE_H
#define RESOURCE_TABLE_H

#include<stdint.h>

namespace OHOS {
const int32_t STRING_ENTRYABILITY_DESC = 0x01000002;
const int32_t STRING_ENTRYABILITY_LABEL = 0x01000003;
const int32_t STRING_APP_NAME = 0x01000000;
const int32_t STRING_CANCEL = 0x01000004;
const int32_t STRING_CONFIRM = 0x01000005;
const int32_t STRING_CURRENT_LOCATION = 0x01000006;
const int32_t STRING_CURRENT_STEPS = 0x01000007;
const int32_t STRING_MODULE_DESC = 0x01000008;
const int32_t STRING_PLACEHOLDER = 0x01000009;
const int32_t STRING_REASON_BACKGROUND = 0x0100000a;
const int32_t STRING_REASON_INTERNET = 0x0100000b;
const int32_t STRING_REASON_LOCATION = 0x0100000c;
const int32_t STRING_REASON_MOTION = 0x0100000d;
const int32_t STRING_SET_TARGET = 0x0100000e;
const int32_t STRING_START = 0x0100000f;
const int32_t STRING_START_POSITION = 0x01000010;
const int32_t STRING_STEP = 0x01000011;
const int32_t STRING_STEPS = 0x01000012;
const int32_t STRING_STOP = 0x01000013;
const int32_t STRING_WALKING_DATA = 0x01000014;
const int32_t COLOR_BUTTON_BACKGROUND = 0x01000015;
const int32_t COLOR_BUTTON_FONT = 0x01000016;
const int32_t COLOR_DIVIDER = 0x01000017;
const int32_t COLOR_INPUT_TEXT_FONT = 0x01000018;
const int32_t COLOR_START_WINDOW_BACKGROUND = 0x01000019;
const int32_t COLOR_STEP_TEXT_FONT = 0x0100001a;
const int32_t COLOR_STEPS_TEXT_FONT = 0x0100001b;
const int32_t FLOAT_BUTTON_HEIGHT = 0x0100001c;
const int32_t FLOAT_BUTTON_MARGIN_TOP = 0x0100001d;
const int32_t FLOAT_CURRENT_FONT_SIZE = 0x0100001e;
const int32_t FLOAT_CURRENT_LOCATION_HEIGHT = 0x0100001f;
const int32_t FLOAT_CURRENT_MARGIN_BOTTOM = 0x01000020;
const int32_t FLOAT_CURRENT_MARGIN_LEFT = 0x01000021;
const int32_t FLOAT_CURRENT_MARGIN_TOP = 0x01000022;
const int32_t FLOAT_CURRENT_ROW_HEIGHT = 0x01000023;
const int32_t FLOAT_CURRENT_SITUATION_HEIGHT = 0x01000024;
const int32_t FLOAT_CURRENT_STEPS_FONT = 0x01000025;
const int32_t FLOAT_DESCRIPTION_TEXT_HEIGHT = 0x01000026;
const int32_t FLOAT_DESCRIPTION_TEXT_WIDTH = 0x01000027;
const int32_t FLOAT_DIALOG_BORDER_RADIUS = 0x01000028;
const int32_t FLOAT_DISPLAY_TEXT_HEIGHT = 0x01000029;
const int32_t FLOAT_DISPLAY_TEXT_WIDTH = 0x0100002a;
const int32_t FLOAT_DIVIDER_HEIGHT = 0x0100002b;
const int32_t FLOAT_DIVIDER_MARGIN_LEFT = 0x0100002c;
const int32_t FLOAT_DIVIDER_MARGIN_RIGHT = 0x0100002d;
const int32_t FLOAT_INPUT_FONT_SIZE = 0x0100002e;
const int32_t FLOAT_INPUT_MARGIN_BOTTOM = 0x0100002f;
const int32_t FLOAT_INPUT_MARGIN_LEFT = 0x01000030;
const int32_t FLOAT_INPUT_MARGIN_TOP = 0x01000031;
const int32_t FLOAT_INPUT_TEXT_FONT_SIZE = 0x01000032;
const int32_t FLOAT_INPUT_TEXT_HEIGHT = 0x01000033;
const int32_t FLOAT_LOCATION_FONT_SIZE = 0x01000034;
const int32_t FLOAT_LOCATION_MARGIN_BOTTOM = 0x01000035;
const int32_t FLOAT_LOCATION_MARGIN_LEFT = 0x01000036;
const int32_t FLOAT_LOCATION_MARGIN_TOP = 0x01000037;
const int32_t FLOAT_PERCENT_MARGIN_TOP = 0x01000038;
const int32_t FLOAT_PERCENT_TEXT_FONT = 0x01000039;
const int32_t FLOAT_PERCENT_TEXT_RADIUS = 0x0100003a;
const int32_t FLOAT_POSITION_FONT_SIZE = 0x0100003b;
const int32_t FLOAT_POSITION_MARGIN_BOTTOM = 0x0100003c;
const int32_t FLOAT_POSITION_MARGIN_LEFT = 0x0100003d;
const int32_t FLOAT_POSITION_MARGIN_TOP = 0x0100003e;
const int32_t FLOAT_PROGRESS_MARGIN_TOP = 0x0100003f;
const int32_t FLOAT_PROGRESS_TEXT_FONT = 0x01000040;
const int32_t FLOAT_PROGRESS_TEXT_RADIUS = 0x01000041;
const int32_t FLOAT_PROGRESS_WIDTH = 0x01000042;
const int32_t FLOAT_RECORD_STEPS_FONT = 0x01000043;
const int32_t FLOAT_ROW_MARGIN_BOTTOM = 0x01000044;
const int32_t FLOAT_ROW_MARGIN_LEFT = 0x01000045;
const int32_t FLOAT_ROW_MARGIN_TOP = 0x01000046;
const int32_t FLOAT_SITUATION_BORDER_RADIUS = 0x01000047;
const int32_t FLOAT_SITUATION_MARGIN_TOP = 0x01000048;
const int32_t FLOAT_START_BUTTON_HEIGHT = 0x01000049;
const int32_t FLOAT_START_BUTTON_RADIUS = 0x0100004a;
const int32_t FLOAT_START_BUTTON_WIDTH = 0x0100004b;
const int32_t FLOAT_START_FONT_SIZE = 0x0100004c;
const int32_t FLOAT_START_POSITION_FONT = 0x0100004d;
const int32_t FLOAT_START_POSITION_HEIGHT = 0x0100004e;
const int32_t FLOAT_TARGET_BUTTON_FONT = 0x0100004f;
const int32_t FLOAT_TARGET_BUTTON_HEIGHT = 0x01000050;
const int32_t FLOAT_TARGET_BUTTON_RADIUS = 0x01000051;
const int32_t FLOAT_TARGET_BUTTON_WIDTH = 0x01000052;
const int32_t FLOAT_TARGET_MARGIN_BOTTOM = 0x01000053;
const int32_t FLOAT_TARGET_MARGIN_TOP = 0x01000054;
const int32_t FLOAT_TEXT_FONT_SIZE = 0x01000055;
const int32_t FLOAT_TEXT_HEIGHT = 0x01000056;
const int32_t FLOAT_TEXT_INPUT_HEIGHT = 0x01000057;
const int32_t FLOAT_TEXT_MARGIN_BOTTOM = 0x01000058;
const int32_t FLOAT_TEXT_MARGIN_LEFT = 0x01000059;
const int32_t FLOAT_TEXT_MARGIN_RIGHT = 0x0100005a;
const int32_t FLOAT_TEXT_MARGIN_TOP = 0x0100005b;
const int32_t FLOAT_TEXT_WIDTH = 0x0100005c;
const int32_t FLOAT_VALUE_MARGIN_TOP = 0x0100005d;
const int32_t FLOAT_WALLING_HEIGHT = 0x0100005e;
const int32_t FLOAT_WALLING_MARGIN_BOTTOM = 0x0100005f;
const int32_t FLOAT_WALLING_MARGIN_LEFT = 0x01000060;
const int32_t FLOAT_WALLING_MARGIN_TOP = 0x01000061;
const int32_t FLOAT_WALLING_TEXT_FONT = 0x01000062;
const int32_t MEDIA_APP_ICON = 0x01000001;
const int32_t MEDIA_IC_ORANGE = 0x01000063;
const int32_t MEDIA_ICON = 0x01000064;
const int32_t PROFILE_MAIN_PAGES = 0x01000065;
}
#endif