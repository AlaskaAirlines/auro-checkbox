import { AuroCheckbox } from './src/auro-checkbox.js';
import { AuroCheckboxGroup } from './src/auro-checkbox-group.js';

import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-checkbox', AuroCheckbox);
RuntimeUtils.default.prototype.registerComponent('custom-checkbox-group', AuroCheckboxGroup);
