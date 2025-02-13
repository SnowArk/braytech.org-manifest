import BraytechActivityDifficultyDefinition from '@Data/manifest/zh-CHS/BraytechActivityDifficultyDefinition.json';
import BraytechActivityDefinition from '@Data/manifest/zh-CHS/BraytechActivityDefinition.json';
import BraytechCommonDefinition from '@Data/manifest/zh-CHS/BraytechCommonDefinition.json';
import BraytechFeatureDefinition from '@Data/manifest/zh-CHS/BraytechFeatureDefinition.json';
import BraytechMapTypesDefinition from '@Data/manifest/zh-CHS/BraytechMapsTypesDefinition.json';
import BraytechRotationDefinition from '@Data/manifest/zh-CHS/BraytechRotationDefinition.json';
import DestinyActivityDefinition from '@Data/manifest/zh-CHS/DestinyActivityDefinition.json';
import DestinyActivityModeDefinition from '@Data/manifest/zh-CHS/DestinyActivityModeDefinition.json';
import DestinyActivityModifierDefinition from '@Data/manifest/zh-CHS/DestinyActivityModifierDefinition.json';
import DestinyChecklistDefinition from '@Data/manifest/zh-CHS/DestinyChecklistDefinition.json';
import DestinyCollectibleDefinition from '@Data/manifest/zh-CHS/DestinyCollectibleDefinition.json';
import DestinyDamageTypeDefinition from '@Data/manifest/zh-CHS/DestinyDamageTypeDefinition.json';
import DestinyHistoricalStatsDefinition from '@Data/manifest/zh-CHS/DestinyHistoricalStatsDefinition.json';
import DestinyInventoryItemDefinition from '@Data/manifest/zh-CHS/DestinyInventoryItemDefinition.json';
import DestinyInventoryBucketDefinition from '@Data/manifest/zh-CHS/DestinyInventoryBucketDefinition.json';
import DestinyMilestoneDefinition from '@Data/manifest/zh-CHS/DestinyMilestoneDefinition.json';
import DestinySeasonDefinition from '@Data/manifest/zh-CHS/DestinySeasonDefinition.json';
import DestinySourceDefinition from '@Data/manifest/zh-CHS/DestinySourceDefinition.json';
import DestinyStatDefinition from '@Data/manifest/zh-CHS/DestinyStatDefinition.json';
import DestinyTraitDefinition from '@Data/manifest/zh-CHS/DestinyTraitDefinition.json';

import DestinyInventoryItemDefinitionColloquial from '@Data/manifest/zh-CHS/DestinyInventoryItemDefinitionColloquial.json';

const zhCHS = {
  definitions: {
    BraytechActivityDefinition,
    BraytechActivityDifficultyDefinition,
    BraytechCommonDefinition,
    BraytechFeatureDefinition,
    BraytechMapTypesDefinition,
    BraytechRotationDefinition,
    DestinyActivityDefinition,
    DestinyActivityModeDefinition,
    DestinyActivityModifierDefinition,
    DestinyChecklistDefinition,
    DestinyCollectibleDefinition,
    DestinyDamageTypeDefinition,
    DestinyHistoricalStatsDefinition,
    DestinyInventoryItemDefinition,
    DestinyInventoryBucketDefinition,
    DestinyMilestoneDefinition,
    DestinySeasonDefinition,
    DestinySourceDefinition,
    DestinyStatDefinition,
    DestinyTraitDefinition,
  },
  optional: {
    colloquialDefinitions: {
      DestinyInventoryItemDefinition: DestinyInventoryItemDefinitionColloquial,
    },
  },
};

export default zhCHS;
