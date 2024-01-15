const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const IrrigationSettingController = require('../controllers/irrigationSettingController')

router
  
      .get('/setting/:id?',auth, IrrigationSettingController.getSettings)
      .get('/userSettings/:id',auth, IrrigationSettingController.getUserSettings)

      .post('/setting', auth, IrrigationSettingController.createIrrigationSetting)

      .patch('/setting/:id',auth, IrrigationSettingController.updateIrrigationSetting)

      .delete('/setting/:settingId',auth, IrrigationSettingController.deleteIrrigationSetting)

module.exports = router;