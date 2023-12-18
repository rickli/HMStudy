import data_preferences from '@ohos:data.preferences';
import { CommonConstants } from '@bundle:com.example.pedometerapp/entry/ets/common/constants/CommonConstants';
import { GlobalContext } from '@bundle:com.example.pedometerapp/entry/ets/common/utils/GlobalContext';
import Logger from '@bundle:com.example.pedometerapp/entry/ets/common/utils/Logger';
const TAG = 'StepsUtil';
const PREFERENCES_NAME = 'myPreferences';
/**
 * Steps util function.
 */
export class StepsUtil {
    createStepsPreferences(context) {
        let preferences = data_preferences.getPreferences(context, PREFERENCES_NAME);
        GlobalContext.getContext().setObject('getStepsPreferences', preferences);
    }
    /**
     * Get the progress value.
     *
     * @param {number} setSteps
     * @param {number} currentSteps
     * @return {number} progressValue
     */
    getProgressValue(setSteps, currentSteps) {
        let progressValue = 0;
        if (setSteps > 0 && currentSteps > 0) {
            progressValue = Math.round((currentSteps / setSteps) * CommonConstants.ONE_HUNDRED);
        }
        return progressValue;
    }
    /**
     * Put preferences value.
     *
     * @param {string} key
     * @param {string} value
     */
    putStorageValue(key, value) {
        var _a;
        (_a = GlobalContext.getContext().getObject('getStepsPreferences')) === null || _a === void 0 ? void 0 : _a.then((preferences) => {
            preferences.put(key, value).then(() => {
                Logger.info(TAG, 'Storage put succeeded, key:' + key);
            }).catch((err) => {
                Logger.error(TAG, 'Failed to put the value of startup with err: ' + JSON.stringify(err));
            });
        }).catch((err) => {
            Logger.error(TAG, 'Failed to get the storage with err:' + JSON.stringify(err));
        });
    }
    /**
     * Get preferences value.
     *
     * @param {number} setSteps
     * @param {Function} callback
     */
    async getStorageValue(key) {
        let ret = '';
        const preferences = await GlobalContext.getContext().getObject('getStepsPreferences');
        if (preferences) {
            ret = await (preferences === null || preferences === void 0 ? void 0 : preferences.get(key, ret));
        }
        return String(ret);
    }
    /**
     * Clean steps data.
     */
    CleanStepsData() {
        this.putStorageValue(CommonConstants.OLD_STEPS, '');
        this.putStorageValue(CommonConstants.IS_START, CommonConstants.FALSE);
        this.putStorageValue(CommonConstants.START_POSITION, '');
        this.putStorageValue(CommonConstants.PROGRESS_VALUE_TAG, CommonConstants.INITIALIZATION_VALUE);
    }
    /**
     * Check str is empty.
     *
     * @param {string} str
     * @return {boolean} true
     */
    checkStrIsEmpty(str) {
        return (str === null || str === void 0 ? void 0 : str.trim().length) === 0;
    }
}
let stepsUtil = new StepsUtil();
export default stepsUtil;
//# sourceMappingURL=StepsUtil.js.map