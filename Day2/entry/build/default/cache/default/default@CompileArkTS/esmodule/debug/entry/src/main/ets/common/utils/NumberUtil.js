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
class NumberUtil {
    _parseInt(str, radix) {
        let res = 0;
        str = String(str).trim().split('.')[0];
        let length = str.length;
        for (let i = 0; i < length; i++) {
            let arr = str.split('').reverse().join('');
            res += Math.floor(Number(arr[i])) * Math.pow(radix, i);
        }
        return res;
    }
}
let numberUtil = new NumberUtil();
export default numberUtil;
//# sourceMappingURL=NumberUtil.js.map