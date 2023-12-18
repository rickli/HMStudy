import wantAgent from '@ohos:app.ability.wantAgent';
import backgroundTaskManager from '@ohos:resourceschedule.backgroundTaskManager';
import Logger from '@bundle:com.example.pedometerapp/entry/ets/common/utils/Logger';
const TAG = 'Steps Utils';
export class BackgroundUtil {
    /**
     * Start background task.
     *
     * @param context
     */
    static startContinuousTask(context) {
        let wantAgentInfo = {
            wants: [
                {
                    bundleName: context.abilityInfo.bundleName,
                    abilityName: context.abilityInfo.name
                }
            ],
            operationType: wantAgent.OperationType.START_ABILITY,
            requestCode: 0,
            wantAgentFlags: [wantAgent.WantAgentFlags.UPDATE_PRESENT_FLAG]
        };
        wantAgent.getWantAgent(wantAgentInfo).then((wantAgentObj) => {
            try {
                backgroundTaskManager.startBackgroundRunning(context, backgroundTaskManager.BackgroundMode.LOCATION, wantAgentObj).then(() => {
                    Logger.info(TAG, 'startBackgroundRunning succeeded');
                }).catch((err) => {
                    Logger.error(TAG, `startBackgroundRunning failed Cause:  ${JSON.stringify(err)}`);
                });
            }
            catch (error) {
                Logger.error(TAG, `stopBackgroundRunning failed. error: ${JSON.stringify(error)} `);
            }
        });
    }
    /**
     * Stop background task.
     *
     * @param context
     */
    static stopContinuousTask(context) {
        try {
            backgroundTaskManager.stopBackgroundRunning(context).then(() => {
                Logger.info(TAG, 'stopBackgroundRunning succeeded');
            }).catch((err) => {
                Logger.error(TAG, `stopBackgroundRunning failed Cause:  ${JSON.stringify(err)}`);
            });
        }
        catch (error) {
            Logger.error(TAG, `stopBackgroundRunning failed. error: ${JSON.stringify(error)} `);
        }
    }
}
//# sourceMappingURL=BackgroundUtil.js.map